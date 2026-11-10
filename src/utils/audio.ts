// Procedural Web Audio API sound synthesizer
// Zero external asset downloads, zero bandwidth cost, zero licensing hurdles

class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  constructor() {
    // Lazy init on first user interaction to comply with browser autoplay policies
  }

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTone(freq: number, type: OscillatorType, duration: number, startVol = 0.15, endVol = 0.001) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(startVol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, endVol), this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio context may be blocked by browser policy
    }
  }

  // Pre-configured sound effects
  public click() {
    this.playTone(600, 'sine', 0.04, 0.08);
  }

  public blip() {
    this.playTone(880, 'square', 0.06, 0.1);
  }

  public score() {
    this.playTone(523.25, 'triangle', 0.08, 0.15);
    setTimeout(() => this.playTone(659.25, 'triangle', 0.12, 0.15), 60);
  }

  public merge() {
    this.playTone(329.63, 'sine', 0.1, 0.2);
    setTimeout(() => this.playTone(493.88, 'sine', 0.15, 0.2), 50);
    setTimeout(() => this.playTone(659.25, 'sine', 0.2, 0.2), 100);
  }

  public victory() {
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.25, 0.2), idx * 100);
    });
  }

  public gameOver() {
    const notes = [440, 370, 311.13, 220];
    notes.forEach((f, idx) => {
      setTimeout(() => this.playTone(f, 'sawtooth', 0.3, 0.15), idx * 120);
    });
  }

  public explosion() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const bufferSize = this.ctx.sampleRate * 0.2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.2);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
    } catch (e) {}
  }
}

export const sound = new SoundSynthesizer();
