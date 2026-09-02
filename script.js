const letters = [
  ["ا", "Alif", "Jahr, Istifal, Infitah, Ismat"],
  ["ب", "Ba", "Jahr, Shiddah, Istifal, Infitah, Idhlaq, Qalqalah"],
  ["ت", "Ta", "Hams, Shiddah, Istifal, Infitah, Ismat"],
  ["ث", "Tha", "Hams, Rakhawah, Istifal, Infitah, Ismat"],
  ["ج", "Jeem", "Jahr, Shiddah, Istifal, Infitah, Ismat, Qalqalah"],
  ["ح", "Ha", "Hams, Rakhawah, Istifal, Infitah, Ismat"],
  ["خ", "Kha", "Hams, Rakhawah, Isti'la, Infitah, Ismat"],
  ["د", "Dal", "Jahr, Shiddah, Istifal, Infitah, Ismat, Qalqalah"],
  ["ذ", "Dhal", "Jahr, Rakhawah, Istifal, Infitah, Ismat"],
  ["ر", "Ra", "Jahr, Tawassut, Istifal, Infitah, Idhlaq, Inhiraf, Takrir"],
  ["ز", "Zay", "Jahr, Rakhawah, Istifal, Infitah, Ismat, Safir"],
  ["س", "Seen", "Hams, Rakhawah, Istifal, Infitah, Ismat, Safir"],
  ["ش", "Sheen", "Hams, Rakhawah, Istifal, Infitah, Ismat, Tafash-shi"],
  ["ص", "Sad", "Hams, Rakhawah, Isti'la, Itbaq, Ismat, Safir"],
  ["ض", "Dad", "Jahr, Rakhawah, Isti'la, Itbaq, Ismat, Istitalah"],
  ["ط", "Ta", "Jahr, Shiddah, Isti'la, Itbaq, Ismat, Qalqalah"],
  ["ظ", "Dha", "Jahr, Rakhawah, Isti'la, Itbaq, Ismat"],
  ["ع", "Ayn", "Jahr, Tawassut, Istifal, Infitah, Ismat"],
  ["غ", "Ghayn", "Jahr, Rakhawah, Isti'la, Infitah, Ismat"],
  ["ف", "Fa", "Hams, Rakhawah, Istifal, Infitah, Idhlaq"],
  ["ق", "Qaf", "Jahr, Shiddah, Isti'la, Infitah, Ismat, Qalqalah"],
  ["ك", "Kaf", "Hams, Shiddah, Istifal, Infitah, Ismat"],
  ["ل", "Lam", "Jahr, Tawassut, Istifal, Infitah, Idhlaq, Inhiraf"],
  ["م", "Meem", "Jahr, Tawassut, Istifal, Infitah, Idhlaq"],
  ["ن", "Noon", "Jahr, Tawassut, Istifal, Infitah, Idhlaq, Ghunnah"],
  ["ه", "Ha", "Hams, Rakhawah, Istifal, Infitah, Ismat"],
  ["و", "Waw", "Jahr, Rakhawah, Istifal, Infitah, Ismat, Leen"],
  ["ي", "Ya", "Jahr, Rakhawah, Istifal, Infitah, Ismat, Leen"]
];

const app = document.getElementById("app");
const soundButton = document.getElementById("sound");

let soundEnabled = true;
let stars = Number(localStorage.getItem("arabicKidsStars") || 0);

if (soundButton) {
  soundButton.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundButton.textContent = soundEnabled ? "🔊" : "🔇";
  });
}

function speak(text) {
  if (!soundEnabled) return;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();

    const voice = new SpeechSynthesisUtterance(text);
    voice.lang = "ar-SA";
    voice.rate = 0.6;
    voice.pitch = 1;

    window.speechSynthesis.speak(voice);
  }
}

function home() {
  app.innerHTML = `
    <section class="hero">
      <h1>🌈 Arabic Kids</h1>
      <p>Learn Arabic letters, play games and discover Tajweed.</p>
    </section>

    <div class="grid">

      <button class="card c1" onclick="learnLetters()">
        <span class="e">📚</span>
        <h3>Learn Letters</h3>
        <p>Learn all 28 Arabic letters.</p>
      </button>

      <button class="card c2" onclick="startQuiz()">
        <span class="e">🎯</span>
        <h3>Quiz Challenge</h3>
        <p>Test your Arabic knowledge.</p>
      </button>

      <button class="card c3" onclick="memoryGame()">
        <span class="e">🧠</span>
        <h3>Memory Game</h3>
        <p>Match the Arabic letters.</p>
      </button>

      <button class="card c4" onclick="tajweedCorner()">
        <span class="e">✨</span>
        <h3>Tajweed Corner</h3>
        <p>Explore letter qualities.</p>
      </button>

      <button class="card c5" onclick="dailyArabic()">
        <span class="e">☀️</span>
        <h3>Daily Arabic</h3>
        <p>Practice one letter every day.</p>
      </button>

      <button class="card c6" onclick="myProgress()">
        <span class="e">🏆</span>
        <h3>My Progress</h3>
        <p>See your stars and level.</p>
      </button>

    </div>

    <button class="install" onclick="installInfo()">
      📲 Install Arabic Kids
    </button>
  `;
}

function learnLetters() {
  let index = 0;

  function render() {
    const item = letters[index];

    app.innerHTML = `
      <section class="section">

        <button class="back" onclick="home()">
          ← Home
        </button>

        <div class="title">
          <h2>📚 Learn Letters</h2>
          <p>Letter ${index + 1} of 28</p>
        </div>

        <div class="progress">
          <i style="width:${((index + 1) / 
