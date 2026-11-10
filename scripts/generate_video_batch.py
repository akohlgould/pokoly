import math
import os
import struct
import subprocess
import wave
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "videos"
os.makedirs(OUTPUT_DIR, exist_ok=True)
FRAMES_DIR = os.path.join(OUTPUT_DIR, "batch_frames")
os.makedirs(FRAMES_DIR, exist_ok=True)

WIDTH = 1080
HEIGHT = 1920
FPS = 30

SAFE_WIDTH = 840
LEFT_SAFE = (WIDTH - SAFE_WIDTH) // 2
RIGHT_SAFE = LEFT_SAFE + SAFE_WIDTH

FONT_DIR = "/System/Library/Fonts/Supplemental"
font_huge = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 52)
font_title = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 46)
font_badge = ImageFont.truetype(f"{FONT_DIR}/Arial Rounded Bold.ttf", 32)
font_card_title = ImageFont.truetype(f"{FONT_DIR}/Arial Bold.ttf", 38)
font_card_sub = ImageFont.truetype(f"{FONT_DIR}/Arial.ttf", 26)
font_year = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 48)
font_cta_h = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 44)
font_cta_sub = ImageFont.truetype(f"{FONT_DIR}/Arial Bold.ttf", 34)
font_btn = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 36)
font_tile = ImageFont.truetype(f"{FONT_DIR}/Arial Black.ttf", 64)

def draw_rounded_rect(draw, bbox, radius, fill=None, outline=None, width=1):
    x0, y0, x1, y1 = bbox
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill, outline=outline, width=width)

def draw_fit_text(draw, pos, text, font, fill, anchor="mm", max_width=SAFE_WIDTH, stroke_width=0, stroke_fill=None):
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    if text_w > max_width:
        scale = max_width / text_w
        new_size = max(18, int(font.size * scale))
        scaled_font = ImageFont.truetype(font.path, new_size)
        draw.text(pos, text, fill=fill, font=scaled_font, anchor=anchor, stroke_width=stroke_width, stroke_fill=stroke_fill)
    else:
        draw.text(pos, text, fill=fill, font=font, anchor=anchor, stroke_width=stroke_width, stroke_fill=stroke_fill)

def create_audio_file(wav_path, duration_sec, tick_times, whoosh_time, reveal_time):
    sample_rate = 44100
    num_samples = int(sample_rate * duration_sec)
    audio_data = []

    for i in range(num_samples):
        t = i / sample_rate
        sample = 0.0

        for tt in tick_times:
            if 0 <= t - tt <= 0.08:
                dt = t - tt
                env = math.exp(-dt * 45)
                freq = 880 if tt != tick_times[-1] else 1174
                sample += 0.28 * math.sin(2 * math.pi * freq * dt) * env

        if whoosh_time <= t <= whoosh_time + 0.8:
            dt = t - whoosh_time
            sweep_freq = 280 + 650 * (dt / 0.8)
            env = math.sin(dt / 0.8 * math.pi)
            sample += 0.15 * math.sin(2 * math.pi * sweep_freq * dt) * env

        if reveal_time <= t <= reveal_time + 1.8:
            dt = t - reveal_time
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

def render_video_to_mp4(total_frames, render_fn, output_mp4, duration_sec, tick_times, whoosh_time, reveal_time):
    for f in os.listdir(FRAMES_DIR):
        os.remove(os.path.join(FRAMES_DIR, f))

    for idx in range(total_frames):
        img = render_fn(idx, total_frames)
        img.save(os.path.join(FRAMES_DIR, f"frame_{idx:04d}.png"))

    wav_path = os.path.join(OUTPUT_DIR, "temp_audio.wav")
    create_audio_file(wav_path, duration_sec, tick_times, whoosh_time, reveal_time)

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

    for f in os.listdir(FRAMES_DIR):
        os.remove(os.path.join(FRAMES_DIR, f))
    if os.path.exists(wav_path):
        os.remove(wav_path)

# ==============================================================================
# VIDEO 1: ChronoTrail - Tech & Gaming Edition (NO BACKGROUND CIRCLES BEHIND TEXT)
# ==============================================================================
def render_chronotrail_tech(frame_idx, total_frames):
    t = frame_idx / FPS
    # Pure dark background
    img = Image.new("RGBA", (WIDTH, HEIGHT), (7, 10, 16, 255))
    draw = ImageDraw.Draw(img)

    # Top Pill
    draw_rounded_rect(draw, (310, 190, 770, 246), radius=28, fill=(19, 27, 43, 255), outline=(56, 75, 115, 255), width=2)
    draw.text((WIDTH // 2, 218), "⚡ TECH TIMELINE TRIVIA", fill=(56, 189, 248), font=font_badge, anchor="mm")

    # Hook - Crisp white & cyan on pure black with stroke
    draw_fit_text(draw, (WIDTH // 2, 310), "WHICH CAME FIRST?", font_huge, (255, 255, 255),
                  anchor="mm", stroke_width=2, stroke_fill=(0, 0, 0, 255))
    draw_fit_text(draw, (WIDTH // 2, 380), "ORDER FROM OLDEST TO NEWEST", font_title, (56, 189, 248),
                  anchor="mm", stroke_width=2, stroke_fill=(0, 0, 0, 255))

    if t < 4.8:
        draw_fit_text(draw, (WIDTH // 2, 450), "⏳ 88% get the order wrong", font_badge, (251, 191, 36), anchor="mm")
    else:
        draw_fit_text(draw, (WIDTH // 2, 450), "✅ REVEALING DATES...", font_badge, (74, 222, 128), anchor="mm")

    events = [
        {"title": "PlayStation 1 Released", "sub": "Sony enters 3D disc console era", "year": 1994, "orig_idx": 1},
        {"title": "World Wide Web Public", "sub": "Tim Berners-Lee opens web to world", "year": 1991, "orig_idx": 0},
        {"title": "First iPhone Announced", "sub": "Steve Jobs reveals multi-touch phone", "year": 2007, "orig_idx": 2},
    ]

    card_w = SAFE_WIDTH
    card_h = 175
    card_x = LEFT_SAFE
    base_ys = [530, 735, 940]

    for i, item in enumerate(events):
        initial_slot = i
        target_slot = item["orig_idx"]
        y_init = base_ys[initial_slot]
        y_target = base_ys[target_slot]

        if t < 4.8:
            curr_y = y_init
        elif t < 6.0:
            prog = (t - 4.8) / 1.2
            ease = 0.5 - 0.5 * math.cos(prog * math.pi)
            curr_y = y_init + (y_target - y_init) * ease
        else:
            curr_y = y_target

        is_rev = t >= 6.0
        border_col = (74, 222, 128, 255) if is_rev else (51, 65, 85, 255)
        bg_col = (19, 32, 28, 255) if is_rev else (22, 30, 46, 255)

        draw_rounded_rect(draw, (card_x, int(curr_y), card_x + card_w, int(curr_y + card_h)),
                          radius=24, fill=bg_col, outline=border_col, width=3)

        draw_fit_text(draw, (card_x + 35, int(curr_y + 40)), item["title"], font_card_title, (255, 255, 255), anchor="la", max_width=560)
        draw_fit_text(draw, (card_x + 35, int(curr_y + 95)), item["sub"], font_card_sub, (203, 213, 225), anchor="la", max_width=560)

        bx0, by0, bx1, by1 = card_x + card_w - 185, int(curr_y + 35), card_x + card_w - 25, int(curr_y + 140)
        if is_rev:
            draw_rounded_rect(draw, (bx0, by0, bx1, by1), radius=18, fill=(34, 197, 94, 50), outline=(74, 222, 128, 255), width=2)
            draw.text(((bx0 + bx1) // 2, (by0 + by1) // 2), str(item["year"]), fill=(74, 222, 128), font=font_year, anchor="mm")
        else:
            draw_rounded_rect(draw, (bx0, by0, bx1, by1), radius=18, fill=(30, 41, 59, 255), outline=(71, 85, 105, 255), width=1)
            draw.text(((bx0 + bx1) // 2, (by0 + by1) // 2), "???", fill=(148, 163, 184), font=font_year, anchor="mm")

    # Countdown bar
    if t < 4.8:
        bar_y = 1155
        prog = max(0.0, min(1.0, (4.8 - t) / 3.3))
        draw_rounded_rect(draw, (LEFT_SAFE, bar_y, RIGHT_SAFE, bar_y + 20), radius=10, fill=(30, 41, 59, 255))
        if prog > 0.01:
            draw_rounded_rect(draw, (LEFT_SAFE, bar_y, LEFT_SAFE + int(SAFE_WIDTH * prog), bar_y + 20),
                              radius=10, fill=(239, 68, 68, 255) if prog < 0.3 else (56, 189, 248, 255))
        rem = max(0, int(math.ceil(4.8 - t)))
        draw_fit_text(draw, (WIDTH // 2, 1215), f"⏳ Lock in your answer: {rem}s", font_badge, (255, 255, 255), anchor="mm")

    # CTA Card at t >= 7.5
    if t >= 7.5:
        cta_prog = min(1.0, (t - 7.5) / 0.5)
        cta_y = int(1280 - 25 * math.sin(cta_prog * math.pi / 2))
        cta_h = 320

        draw_rounded_rect(draw, (LEFT_SAFE, cta_y, RIGHT_SAFE, cta_y + cta_h),
                          radius=32, fill=(15, 23, 42, 252), outline=(56, 189, 248, 255), width=3)
        draw_fit_text(draw, (WIDTH // 2, cta_y + 65), "Play Daily Timeline Challenges", font_cta_sub, (241, 245, 249), anchor="mm", max_width=780)
        draw_fit_text(draw, (WIDTH // 2, cta_y + 135), "🎮 ChronoTrail Online", font_cta_h, (56, 189, 248), anchor="mm", max_width=780)

        btn_w = 480
        bx0 = (WIDTH - btn_w) // 2
        draw_rounded_rect(draw, (bx0, cta_y + 200, bx0 + btn_w, cta_y + 275), radius=38, fill=(56, 189, 248, 255))
        draw.text((WIDTH // 2, cta_y + 237), "PLAY FREE NOW ➡️", fill=(8, 11, 16), font=font_btn, anchor="mm")

    draw.text((WIDTH // 2, 1680), "pokoly.com/games/chronotrail", fill=(148, 163, 184), font=font_card_sub, anchor="mm")
    return img

# ==============================================================================
# VIDEO 2: WordHedge - Word Duel & Deduction
# ==============================================================================
def render_wordhedge_duel(frame_idx, total_frames):
    t = frame_idx / FPS
    img = Image.new("RGBA", (WIDTH, HEIGHT), (8, 11, 16, 255))
    draw = ImageDraw.Draw(img)

    # Top Pill
    draw_rounded_rect(draw, (320, 190, 760, 246), radius=28, fill=(28, 25, 23, 255), outline=(120, 53, 15, 255), width=2)
    draw.text((WIDTH // 2, 218), "🎯 DAILY WORD DEDUCTION", fill=(251, 191, 36), font=font_badge, anchor="mm")

    # Hook - crisp text with outline
    draw_fit_text(draw, (WIDTH // 2, 310), "CAN YOU GUESS THE WORD?", font_huge, (255, 255, 255),
                  anchor="mm", stroke_width=2, stroke_fill=(0, 0, 0, 255))
    draw_fit_text(draw, (WIDTH // 2, 380), "FROM THESE 3 CLUES", font_title, (251, 191, 36),
                  anchor="mm", stroke_width=2, stroke_fill=(0, 0, 0, 255))

    if t < 4.8:
        draw_fit_text(draw, (WIDTH // 2, 450), "💡 Only 1 in 10 players solve it", font_badge, (226, 232, 240), anchor="mm")
    else:
        draw_fit_text(draw, (WIDTH // 2, 450), "✅ REVEALING SECRET WORD...", font_badge, (74, 222, 128), anchor="mm")

    # Clue cards
    clues = [
        {"num": "CLUE 1", "text": "5-letter word starting with 'C'"},
        {"num": "CLUE 2", "text": "Contains exactly 2 vowels ('A' and 'E')"},
        {"num": "CLUE 3", "text": "A majestic tall bird & construction machine"},
    ]

    card_w = SAFE_WIDTH
    card_h = 130
    card_x = LEFT_SAFE
    base_ys = [520, 675, 830]

    for i, c in enumerate(clues):
        cy = base_ys[i]
        draw_rounded_rect(draw, (card_x, cy, card_x + card_w, cy + card_h),
                          radius=20, fill=(24, 24, 27, 255), outline=(63, 63, 70, 255), width=2)
        draw_rounded_rect(draw, (card_x + 25, cy + 25, card_x + 160, cy + 65),
                          radius=10, fill=(63, 63, 70, 255))
        draw.text((card_x + 92, cy + 45), c["num"], fill=(251, 191, 36), font=font_badge, anchor="mm")
        draw_fit_text(draw, (card_x + 25, cy + 95), c["text"], font_card_title, (244, 244, 245), anchor="la", max_width=780)

    # Word Tiles Grid
    letters = ["C", "R", "A", "N", "E"]
    tile_size = 140
    gap = 25
    total_grid_w = 5 * tile_size + 4 * gap
    grid_x0 = (WIDTH - total_grid_w) // 2
    grid_y = 1010

    is_revealed = t >= 5.8
    for idx, char in enumerate(letters):
        tx = grid_x0 + idx * (tile_size + gap)
        if is_revealed:
            draw_rounded_rect(draw, (tx, grid_y, tx + tile_size, grid_y + tile_size),
                              radius=18, fill=(22, 101, 52, 255), outline=(74, 222, 128, 255), width=3)
            draw.text((tx + tile_size // 2, grid_y + tile_size // 2), char, fill=(255, 255, 255), font=font_tile, anchor="mm")
        else:
            draw_rounded_rect(draw, (tx, grid_y, tx + tile_size, grid_y + tile_size),
                              radius=18, fill=(39, 39, 42, 255), outline=(82, 82, 91, 255), width=2)
            draw.text((tx + tile_size // 2, grid_y + tile_size // 2), "?", fill=(161, 161, 170), font=font_tile, anchor="mm")

    # Countdown Bar
    if t < 4.8:
        bar_y = 1195
        prog = max(0.0, min(1.0, (4.8 - t) / 3.3))
        draw_rounded_rect(draw, (LEFT_SAFE, bar_y, RIGHT_SAFE, bar_y + 20), radius=10, fill=(39, 39, 42, 255))
        if prog > 0.01:
            draw_rounded_rect(draw, (LEFT_SAFE, bar_y, LEFT_SAFE + int(SAFE_WIDTH * prog), bar_y + 20),
                              radius=10, fill=(239, 68, 68, 255) if prog < 0.3 else (251, 191, 36, 255))
        rem = max(0, int(math.ceil(4.8 - t)))
        draw_fit_text(draw, (WIDTH // 2, 1255), f"⏳ Drop your guess in the comments ({rem}s)", font_badge, (255, 255, 255), anchor="mm")

    # CTA Card
    if t >= 7.5:
        cta_prog = min(1.0, (t - 7.5) / 0.5)
        cta_y = int(1280 - 25 * math.sin(cta_prog * math.pi / 2))
        cta_h = 320

        draw_rounded_rect(draw, (LEFT_SAFE, cta_y, RIGHT_SAFE, cta_y + cta_h),
                          radius=32, fill=(24, 24, 27, 252), outline=(251, 191, 36, 255), width=3)
        draw_fit_text(draw, (WIDTH // 2, cta_y + 65), "Solve 16 Candidates Daily", font_cta_sub, (244, 244, 245), anchor="mm", max_width=780)
        draw_fit_text(draw, (WIDTH // 2, cta_y + 135), "🎯 Play WordHedge Free", font_cta_h, (251, 191, 36), anchor="mm", max_width=780)

        btn_w = 480
        bx0 = (WIDTH - btn_w) // 2
        draw_rounded_rect(draw, (bx0, cta_y + 200, bx0 + btn_w, cta_y + 275), radius=38, fill=(251, 191, 36, 255))
        draw.text((WIDTH // 2, cta_y + 237), "PLAY NOW ➡️", fill=(24, 24, 27), font=font_btn, anchor="mm")

    draw.text((WIDTH // 2, 1680), "pokoly.com/games/wordhedge", fill=(161, 161, 170), font=font_card_sub, anchor="mm")
    return img

# ==============================================================================
# VIDEO 3: GeoPixel - Landmark Guessing Challenge
# ==============================================================================
def render_geopixel_quiz(frame_idx, total_frames):
    t = frame_idx / FPS
    img = Image.new("RGBA", (WIDTH, HEIGHT), (8, 11, 16, 255))
    draw = ImageDraw.Draw(img)

    # Top Pill
    draw_rounded_rect(draw, (310, 190, 770, 246), radius=28, fill=(30, 27, 46, 255), outline=(139, 92, 246, 255), width=2)
    draw.text((WIDTH // 2, 218), "🌍 PIXEL LANDMARK QUIZ", fill=(192, 132, 252), font=font_badge, anchor="mm")

    # Hook - clean stroke outline
    draw_fit_text(draw, (WIDTH // 2, 310), "NAME THIS WORLD LANDMARK", font_huge, (255, 255, 255),
                  anchor="mm", stroke_width=2, stroke_fill=(0, 0, 0, 255))
    draw_fit_text(draw, (WIDTH // 2, 380), "BEFORE IT SHARPENS!", font_title, (244, 114, 182),
                  anchor="mm", stroke_width=2, stroke_fill=(0, 0, 0, 255))

    if t < 4.8:
        draw_fit_text(draw, (WIDTH // 2, 450), "🔍 3 Clues Provided Below", font_badge, (226, 232, 240), anchor="mm")
    else:
        draw_fit_text(draw, (WIDTH // 2, 450), "✅ REVEALING LANDMARK...", font_badge, (74, 222, 128), anchor="mm")

    # Landmark Clue Box
    clues = [
        {"icon": "📍 Location:", "val": "Paris, France"},
        {"icon": "📏 Height:", "val": "330 meters (1,083 ft) iron lattice"},
        {"icon": "📅 Built:", "val": "1889 for the World's Fair"},
    ]

    card_w = SAFE_WIDTH
    card_h = 240
    card_x = LEFT_SAFE
    card_y = 520

    draw_rounded_rect(draw, (card_x, card_y, card_x + card_w, card_y + card_h),
                      radius=24, fill=(24, 24, 37, 255), outline=(99, 102, 241, 255), width=2)

    for i, c in enumerate(clues):
        row_y = card_y + 40 + i * 65
        draw_fit_text(draw, (card_x + 35, row_y), c["icon"], font_card_title, (192, 132, 252), anchor="la", max_width=300)
        draw_fit_text(draw, (card_x + 280, row_y), c["val"], font_card_title, (255, 255, 255), anchor="la", max_width=500)

    # Big Answer Reveal Card
    ans_y = 800
    ans_h = 280
    is_rev = t >= 5.8
    if is_rev:
        draw_rounded_rect(draw, (card_x, ans_y, card_x + card_w, ans_y + ans_h),
                          radius=28, fill=(20, 35, 28, 255), outline=(74, 222, 128, 255), width=3)
        draw_fit_text(draw, (WIDTH // 2, ans_y + 80), "🇫🇷 THE EIFFEL TOWER 🗼", font_huge, (74, 222, 128), anchor="mm", max_width=780)
        draw_fit_text(draw, (WIDTH // 2, ans_y + 160), "Visited by over 6 Million people annually!", font_card_sub, (203, 213, 225), anchor="mm", max_width=780)
        draw_fit_text(draw, (WIDTH // 2, ans_y + 215), "+200 XP Awarded", font_badge, (251, 191, 36), anchor="mm", max_width=780)
    else:
        draw_rounded_rect(draw, (card_x, ans_y, card_x + card_w, ans_y + ans_h),
                          radius=28, fill=(30, 27, 46, 255), outline=(71, 85, 105, 255), width=2)
        draw_fit_text(draw, (WIDTH // 2, ans_y + 90), "MYSTERY LANDMARK ???", font_huge, (148, 163, 184), anchor="mm", max_width=780)
        draw_fit_text(draw, (WIDTH // 2, ans_y + 175), "Can you guess it before 0s?", font_card_sub, (203, 213, 225), anchor="mm", max_width=780)

    # Countdown Bar
    if t < 4.8:
        bar_y = 1140
        prog = max(0.0, min(1.0, (4.8 - t) / 3.3))
        draw_rounded_rect(draw, (LEFT_SAFE, bar_y, RIGHT_SAFE, bar_y + 20), radius=10, fill=(30, 27, 46, 255))
        if prog > 0.01:
            draw_rounded_rect(draw, (LEFT_SAFE, bar_y, LEFT_SAFE + int(SAFE_WIDTH * prog), bar_y + 20),
                              radius=10, fill=(239, 68, 68, 255) if prog < 0.3 else (244, 114, 182, 255))
        rem = max(0, int(math.ceil(4.8 - t)))
        draw_fit_text(draw, (WIDTH // 2, 1200), f"⏳ Guess in comments before reveal ({rem}s)", font_badge, (255, 255, 255), anchor="mm")

    # CTA Card
    if t >= 7.5:
        cta_prog = min(1.0, (t - 7.5) / 0.5)
        cta_y = int(1280 - 25 * math.sin(cta_prog * math.pi / 2))
        cta_h = 320

        draw_rounded_rect(draw, (LEFT_SAFE, cta_y, RIGHT_SAFE, cta_y + cta_h),
                          radius=32, fill=(24, 24, 37, 252), outline=(192, 132, 252, 255), width=3)
        draw_fit_text(draw, (WIDTH // 2, cta_y + 65), "Test Your Geography Knowledge", font_cta_sub, (241, 245, 249), anchor="mm", max_width=780)
        draw_fit_text(draw, (WIDTH // 2, cta_y + 135), "🌍 Play GeoPixel Free", font_cta_h, (192, 132, 252), anchor="mm", max_width=780)

        btn_w = 480
        bx0 = (WIDTH - btn_w) // 2
        draw_rounded_rect(draw, (bx0, cta_y + 200, bx0 + btn_w, cta_y + 275), radius=38, fill=(192, 132, 252, 255))
        draw.text((WIDTH // 2, cta_y + 237), "PLAY FREE NOW ➡️", fill=(18, 14, 30), font=font_btn, anchor="mm")

    draw.text((WIDTH // 2, 1680), "pokoly.com/games/geopixel", fill=(148, 163, 184), font=font_card_sub, anchor="mm")
    return img

def main():
    duration = 10.5
    total_frames = int(FPS * duration)
    tick_times = [1.8, 2.8, 3.8]

    print("--- 1. Generating ChronoTrail Tech Video ---")
    render_video_to_mp4(
        total_frames,
        render_chronotrail_tech,
        os.path.join(OUTPUT_DIR, "chronotrail_tech_9x16.mp4"),
        duration,
        tick_times,
        whoosh_time=4.8,
        reveal_time=6.0
    )

    print("--- 2. Generating WordHedge Duel Video ---")
    render_video_to_mp4(
        total_frames,
        render_wordhedge_duel,
        os.path.join(OUTPUT_DIR, "wordhedge_duel_9x16.mp4"),
        duration,
        tick_times,
        whoosh_time=4.8,
        reveal_time=5.8
    )

    print("--- 3. Generating GeoPixel Quiz Video ---")
    render_video_to_mp4(
        total_frames,
        render_geopixel_quiz,
        os.path.join(OUTPUT_DIR, "geopixel_quiz_9x16.mp4"),
        duration,
        tick_times,
        whoosh_time=4.8,
        reveal_time=5.8
    )

    if os.path.exists(FRAMES_DIR):
        os.rmdir(FRAMES_DIR)
    print("All batch videos regenerated successfully with pure black background behind text!")

if __name__ == "__main__":
    main()
