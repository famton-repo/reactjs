// Audio Engine - Condition-aware procedural sound generation using Web Audio API
let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
}

// Short tick sound for sidebar clicks
export function playTick() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.04);
  } catch (e) { /* silent fail */ }
}

// Ultra-soft whoosh for card hover
export function playWhoosh() {
  try {
    const ctx = getAudioContext();
    const bufferSize = ctx.sampleRate * 0.06;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    filter.Q.setValueAtTime(1, ctx.currentTime);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(ctx.currentTime);
  } catch (e) { /* silent fail */ }
}

// Soft pop for tab switch
export function playPop() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) { /* silent fail */ }
}

// Satisfying click + chime for CTA
export function playChime() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) { /* silent fail */ }
}

// Very subtle chime for search focus
export function playFocusChime() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(660, ctx.currentTime);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) { /* silent fail */ }
}

// Soft chord on page load
export function playLoadChord() {
  try {
    const ctx = getAudioContext();
    [523, 659, 784].forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.4);
    });
  } catch (e) { /* silent fail */ }
}

/* ─── Condition-aware ambient sound ─── */
let ambientSource = null;
let ambientGain = null;
let ambientNodes = [];

function cleanup() {
  try {
    ambientNodes.forEach(n => { try { n.disconnect(); } catch {} });
    if (ambientSource) { try { ambientSource.stop(); } catch {} }
    ambientSource = null;
    ambientGain = null;
    ambientNodes = [];
  } catch {}
}

export function createAmbientSound(condition) {
  try {
    cleanup();
    const ctx = getAudioContext();
    const cond = (condition || '').toLowerCase();

    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, ctx.currentTime);

    if (cond.includes('rain') || cond.includes('drizzle')) {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(700, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.8);
    } else if (cond.includes('thunder') || cond.includes('storm')) {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.8);
    } else if (cond.includes('snow')) {
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.8);
    } else {
      // Clear/sunny — soft breeze (pink-ish noise)
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.8);
    }

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(ctx.currentTime);

    ambientSource = source;
    ambientGain = gain;
    ambientNodes = [source, filter, gain];

    return { source, gain };
  } catch (e) {
    return null;
  }
}

export function stopAmbient() {
  try {
    if (ambientGain) {
      const ctx = getAudioContext();
      ambientGain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      setTimeout(cleanup, 600);
    }
  } catch (e) {
    cleanup();
  }
}

export function isAmbientPlaying() {
  return ambientSource !== null;
}
