// Procedural Spatial Web Audio Synthesizer (Zero external files, pure Web Audio API)

class SpatialAudioEngine {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = false;
  private ambientOsc: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleAudio(): boolean {
    this.initContext();
    this.isEnabled = !this.isEnabled;

    if (this.isEnabled) {
      this.startAmbient();
      this.playChime(640, 'sine', 0.15);
    } else {
      this.stopAmbient();
    }

    return this.isEnabled;
  }

  public getAudioState(): boolean {
    return this.isEnabled;
  }

  // Futuristic soft click
  public playClick(pitch: number = 880) {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(pitch * 0.4, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  // 3D Geometry Warp Shockwave Sound
  public playWarp() {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.2);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.45);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now);
      filter.frequency.exponentialRampToValueAtTime(2400, now + 0.2);
      filter.frequency.exponentialRampToValueAtTime(400, now + 0.45);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch {
      // Safe fallback
    }
  }

  // Soft musical chime
  public playChime(freq: number = 523.25, type: OscillatorType = 'sine', duration: number = 0.3) {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Safe fallback
    }
  }

  // Subtle ambient drone
  private startAmbient() {
    if (!this.ctx) return;
    try {
      this.stopAmbient();
      const now = this.ctx.currentTime;
      this.ambientOsc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();

      this.ambientOsc.type = 'sine';
      this.ambientOsc.frequency.setValueAtTime(55, now); // Low A

      this.ambientGain.gain.setValueAtTime(0.0001, now);
      this.ambientGain.gain.linearRampToValueAtTime(0.02, now + 1.5); // Very soft background hum

      this.ambientOsc.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc.start(now);
    } catch {
      // Safe fallback
    }
  }

  private stopAmbient() {
    if (this.ambientOsc && this.ambientGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 0.5);
        setTimeout(() => {
          this.ambientOsc?.stop();
          this.ambientOsc?.disconnect();
          this.ambientOsc = null;
        }, 500);
      } catch {
        this.ambientOsc = null;
      }
    }
  }
}

export const spatialAudio = new SpatialAudioEngine();
