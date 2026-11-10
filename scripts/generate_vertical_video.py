import math
import os
import struct
import subprocess
import wave
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "videos"
os.makedirs(OUTPUT_DIR, exist_ok=True)
FRAMES_DIR = os.path.join(OUTPUT_DIR, "frames")
os.makedirs(FRAMES_DIR, exist_ok=True)

WIDTH = 1080
HEIGHT = 1920
FPS = 30
DURATION_SEC = 10.5
TOTAL_FRAMES = int(FPS * DURATION_SEC)

# Safe Margin Width: 840px (120px padding on left and right for TikTok/Reels UI)
SAFE_WIDTH = 840
LEFT_SAFE = (WIDTH - SAFE_WIDTH) // 2   # 120
RIGHT_SAFE = LEFT_SAFE + SAFE_WIDTH      # 960

# Fonts
FONT_DIR = "/System/Library/Fonts/Supplemental"
font_title = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 54)
font_badge = ImageFont.truetype(f"{FONT_DIR}/Arial Rounded Bold.ttf", 32)
font_card_title = ImageFont.truetype(f"{FONT_DIR}/Arial Bold.ttf", 38)
font_card_sub = ImageFont.truetype(f"{FONT_DIR}/Arial.ttf", 26)
font_year = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 50)
font_cta_h = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 46)
font_cta_sub = ImageFont.truetype(f"{FONT_DIR}/Arial Bold.ttf", 36)
font_button = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 36)

# Events Data
EVENTS_SCRAMBLED = [
    {"title": "Penicillin Discovered", "sub": "Fleming laboratory breakthrough", "year": 1928, "orig_idx": 1},
    {"title": "Wright Brothers Flight", "sub": "Kitty Hawk powered aviation begins", "year": 1903, "orig_idx": 0},
    {"title": "Apollo 11 Moon Walk", "sub": "Armstrong & Aldrin lunar landing", "year": 1969, "orig_idx": 2},
]

def draw_rounded_rect(draw, bbox, radius, fill=None, outline=None, width=1):
    x0, y0, x1, y1 = bbox
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill, outline=outline, width=width)

def draw_fit_text(draw, pos, text, font, fill, anchor="mm", max_width=SAFE_WIDTH):
    """Draw text, auto-scaling font down if it exceeds max_width."""
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    if text_w > max_width:
        scale = max_width / text_w
        new_size = int(font.size * scale)
        scaled_font = ImageFont.truetype(font.path, new_size)
        draw.text(pos, text, fill=fill, font=scaled_font, anchor=anchor)
    else:
        draw.text(pos, text, fill=fill, font=font, anchor=anchor)

def render_frame(frame_idx):
    t = frame_idx / FPS
    img = Image.new("RGBA", (WIDTH, HEIGHT), (11, 14, 21, 255))
    draw = ImageDraw.Draw(img)

    # Ambient Glow Background
    glow_y = int(380 + 35 * math.sin(t * 1.5))
    draw.ellipse([WIDTH - 300, glow_y - 250, WIDTH + 250, glow_y + 250], fill=(6, 182, 212, 16))
    draw.ellipse([-180, HEIGHT - 700, 350, HEIGHT - 100], fill=(99, 102, 241, 18))

    # Top Brand Pill (Safely below notification bar at y=200)
    pill_w = 460
    pill_x0 = (WIDTH - pill_w) // 2
    draw_rounded_rect(draw, (pill_x0, 190, pill_x0 + pill_w, 246), radius=28,
                      fill=(20, 27, 45, 255), outline=(56, 75, 115, 255), width=2)
    draw.text((WIDTH // 2, 218), "⚡ POKOLY DAILY CHALLENGE", fill=(34, 211, 238), font=font_badge, anchor="mm")

    # Main Viral Hook Header (Guaranteed within SAFE_WIDTH = 840px)
    draw_fit_text(draw, (WIDTH // 2, 310), "CAN YOU ORDER THESE", font_title, (255, 255, 255), anchor="mm")
    draw_fit_text(draw, (WIDTH // 2, 380), "OLDEST TO NEWEST?", font_title, (56, 189, 248), anchor="mm")

    # Hook Subtitle
    if t < 4.8:
        draw_fit_text(draw, (WIDTH // 2, 450), "⚠️ 91% get the order wrong", font_badge, (251, 191, 36), anchor="mm")
    else:
        draw_fit_text(draw, (WIDTH // 2, 450), "✅ REVEALING TIMELINE...", font_badge, (74, 222, 128), anchor="mm")

    # Card Dimensions (Width = 840px, safe margins 120px on both sides)
    card_w = SAFE_WIDTH
    card_h = 175
    card_x = LEFT_SAFE
    base_ys = [530, 735, 940]

    # Card Animation & Interpolation
    for i, item in enumerate(EVENTS_SCRAMBLED):
        target_slot = item["orig_idx"]
        initial_slot = i

        y_init = base_ys[initial_slot]
        y_target = base_ys[target_slot]

        if t < 4.8:
            current_y = y_init
        elif t < 6.0:
            progress = (t - 4.8) / 1.2
            ease = 0.5 - 0.5 * math.cos(progress * math.pi)
            current_y = y_init + (y_target - y_init) * ease
        else:
            current_y = y_target

        is_revealed = t >= 6.0
        border_col = (74, 222, 128, 255) if is_revealed else (56, 75, 115, 255)
        bg_col = (18, 30, 26, 255) if is_revealed else (20, 26, 38, 255)

        # Draw Card
        draw_rounded_rect(draw, (card_x, int(current_y), card_x + card_w, int(current_y + card_h)),
                          radius=24, fill=bg_col, outline=border_col, width=3)

        # Event Title & Subtitle (Max width = 560px so it never overlaps the year badge)
        draw_fit_text(draw, (card_x + 35, int(current_y + 40)), item["title"],
                      font_card_title, (255, 255, 255), anchor="la", max_width=560)
        draw_fit_text(draw, (card_x + 35, int(current_y + 95)), item["sub"],
                      font_card_sub, (156, 163, 175), anchor="la", max_width=560)

        # Year Badge on the Right
        badge_x0 = card_x + card_w - 185
        badge_y0 = int(current_y + 35)
        badge_x1 = card_x + card_w - 25
        badge_y1 = int(current_y + 140)

        if is_revealed:
            draw_rounded_rect(draw, (badge_x0, badge_y0, badge_x1, badge_y1),
                              radius=18, fill=(34, 197, 94, 45), outline=(74, 222, 128, 255), width=2)
            draw.text(((badge_x0 + badge_x1) // 2, (badge_y0 + badge_y1) // 2),
                      str(item["year"]), fill=(74, 222, 128), font=font_year, anchor="mm")
        else:
            draw_rounded_rect(draw, (badge_x0, badge_y0, badge_x1, badge_y1),
                              radius=18, fill=(28, 36, 52, 255), outline=(56, 75, 115, 255), width=1)
            draw.text(((badge_x0 + badge_x1) // 2, (badge_y0 + badge_y1) // 2),
                      "???", fill=(100, 116, 139), font=font_year, anchor="mm")

    # Countdown Bar & Ticker (1.5s to 4.8s)
    if t < 4.8:
        bar_w = SAFE_WIDTH
        bar_x = LEFT_SAFE
        bar_y = 1155
        progress = max(0.0, min(1.0, (4.8 - t) / 3.3))

        draw_rounded_rect(draw, (bar_x, bar_y, bar_x + bar_w, bar_y + 20), radius=10, fill=(30, 41, 59, 255))
        if progress > 0.01:
            draw_rounded_rect(draw, (bar_x, bar_y, bar_x + int(bar_w * progress), bar_y + 20),
                              radius=10, fill=(239, 68, 68, 255) if progress < 0.3 else (6, 182, 212, 255))

        remaining = max(0, int(math.ceil(4.8 - t)))
        draw_fit_text(draw, (WIDTH // 2, 1215), f"⏳ Guess the order in {remaining}s",
                      font_badge, (255, 255, 255), anchor="mm")

    # Outro CTA Card
    if t >= 7.5:
        cta_prog = min(1.0, (t - 7.5) / 0.5)
        cta_y = int(1280 - 25 * math.sin(cta_prog * math.pi / 2))
        cta_h = 320

        # CTA Container Box (840px wide)
        draw_rounded_rect(draw, (LEFT_SAFE, cta_y, RIGHT_SAFE, cta_y + cta_h),
                          radius=32, fill=(17, 24, 39, 252), outline=(6, 182, 212, 255), width=3)

        draw_fit_text(draw, (WIDTH // 2, cta_y + 65), "Can You Beat Today's Deck?",
                      font_cta_sub, (255, 255, 255), anchor="mm", max_width=780)
        draw_fit_text(draw, (WIDTH // 2, cta_y + 135), "🎮 Play ChronoTrail Free",
                      font_cta_h, (34, 211, 238), anchor="mm", max_width=780)

        # Action Button Pill
        btn_w = 480
        btn_x0 = (WIDTH - btn_w) // 2
        btn_y0 = cta_y + 200
        btn_y1 = cta_y + 275
        draw_rounded_rect(draw, (btn_x0, btn_y0, btn_x0 + btn_w, btn_y1),
                          radius=38, fill=(6, 182, 212, 255))
        draw.text((WIDTH // 2, (btn_y0 + btn_y1) // 2), "LINK IN BIO ➡️",
                  fill=(11, 14, 21), font=font_button, anchor="mm")

    # Bottom Domain Tag (Safe zone at y=1680)
    draw.text((WIDTH // 2, 1680), "pokoly.com/games/chronotrail", fill=(100, 116, 139), font=font_card_sub, anchor="mm")

    # Save frame
    frame_path = os.path.join(FRAMES_DIR, f"frame_{frame_idx:04d}.png")
    img.save(frame_path)

def generate_audio(wav_path):
    sample_rate = 44100
    num_samples = int(sample_rate * DURATION_SEC)
    audio_data = []

    for i in range(num_samples):
        t = i / sample_rate
        sample = 0.0

        for tick_t in [1.8, 2.8, 3.8]:
            if 0 <= t - tick_t <= 0.08:
                dt = t - tick_t
                env = math.exp(-dt * 45)
                freq = 880 if tick_t < 3.8 else 1174
                sample += 0.28 * math.sin(2 * math.pi * freq * dt) * env

        if 4.8 <= t <= 5.6:
            dt = t - 4.8
            sweep_freq = 280 + 650 * (dt / 0.8)
            env = math.sin(dt / 0.8 * math.pi)
            sample += 0.15 * math.sin(2 * math.pi * sweep_freq * dt) * env

        if 6.0 <= t <= 7.8:
            dt = t - 6.0
            env = math.exp(-dt * 2.2)
            chime = (math.sin(2 * math.pi * 523.25 * dt) +
                     math.sin(2 * math.pi * 659.25 * dt) +
                     math.sin(2 * math.pi * 783.99 * dt) +
                     math.sin(2 * math.pi * 1046.50 * dt)) * 0.12 * env
            sample += chime

        sample = max(-0.95, min(0.95, sample))
        audio_data.append(int(sample * 32767))

    with wave.open(wav_path, 'w') as wav_file:
        wav_file.setnchannels(1)
        wav_file.setsampwidth(2)
        wav_file.setframerate(sample_rate)
        packed_data = struct.pack(f'<{len(audio_data)}h', *audio_data)
        wav_file.writeframes(packed_data)

def main():
    print(f"Generating {TOTAL_FRAMES} frames with TikTok safe margins (max_width=840px)...")
    for idx in range(TOTAL_FRAMES):
        render_frame(idx)
        if idx % 45 == 0:
            print(f"Rendered {idx}/{TOTAL_FRAMES} frames ({int(idx/TOTAL_FRAMES*100)}%)")

    wav_path = os.path.join(OUTPUT_DIR, "audio.wav")
    print("Generating audio track...")
    generate_audio(wav_path)

    output_mp4 = os.path.join(OUTPUT_DIR, "chronotrail_challenge_9x16.mp4")
    print(f"Encoding MP4 to {output_mp4} using ffmpeg...")

    cmd = [
        "/opt/homebrew/bin/ffmpeg",
        "-y",
        "-framerate", str(FPS),
        "-i", os.path.join(FRAMES_DIR, "frame_%04d.png"),
        "-i", wav_path,
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "192k",
        "-shortest",
        output_mp4
    ]
    subprocess.run(cmd, check=True)
    print(f"Successfully re-generated vertical video: {output_mp4}")

    # Clean up frames
    for f in os.listdir(FRAMES_DIR):
        os.remove(os.path.join(FRAMES_DIR, f))
    os.rmdir(FRAMES_DIR)
    os.remove(wav_path)
    print("Cleaned up temporary frames and audio.")

if __name__ == "__main__":
    main()
