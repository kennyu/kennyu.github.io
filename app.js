import { NoiseGenerator } from './audio-engine.js';

const generator = new NoiseGenerator();

let state = {
  currentNoiseType: null,
  isPlaying: false
};

const elements = {
  noiseBtns: document.querySelectorAll('.noise-btn'),
  playPauseBtn: document.getElementById('play-pause-btn'),
  volumeSlider: document.getElementById('volume'),
  volumeDisplay: document.getElementById('volume-display')
};

function updateUI() {
  elements.noiseBtns.forEach(btn => {
    if (btn.dataset.type === state.currentNoiseType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (state.currentNoiseType) {
    elements.playPauseBtn.disabled = false;
  }

  const playText = elements.playPauseBtn.querySelector('.play-text');
  if (state.isPlaying) {
    playText.textContent = 'Pause';
    elements.playPauseBtn.classList.add('playing');
  } else {
    playText.textContent = 'Play';
    elements.playPauseBtn.classList.remove('playing');
  }
}

async function selectNoiseType(type) {
  state.currentNoiseType = type;

  if (state.isPlaying) {
    await generator.play(type);
  }

  updateUI();
}

async function togglePlayPause() {
  if (!state.currentNoiseType) return;

  if (state.isPlaying) {
    generator.stop();
    state.isPlaying = false;
  } else {
    await generator.play(state.currentNoiseType);
    state.isPlaying = true;
  }

  updateUI();
}

function updateVolume(value) {
  const volumePercent = parseInt(value);
  const volumeValue = volumePercent / 100;

  generator.setVolume(volumeValue);
  elements.volumeDisplay.textContent = volumePercent;
}

elements.noiseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    selectNoiseType(btn.dataset.type);
  });
});

elements.playPauseBtn.addEventListener('click', togglePlayPause);

elements.volumeSlider.addEventListener('input', (e) => {
  updateVolume(e.target.value);
});

updateVolume(elements.volumeSlider.value);
updateUI();
