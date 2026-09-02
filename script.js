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
        <button class="back" onclick="home()">← Home</button>

        <div class="title">
          <h2>📚 Learn Letters</h2>
          <p>Letter ${index + 1} of 28</p>
        </div>

        <div class="progress">
          <i style="width:${((index + 1) / 28) * 100}%"></i>
        </div>

        <div class="learn">
          <div class="arabic">${item[0]}</div>
          <div class="name">${item[1]}</div>
          <p class="pill">${item[2]}</p>

          <div class="actions">
            <button class="btn" onclick="speak('${item[0]}')">🔊 Listen</button>
          </div>

          <div class="nav">
            <button class="btn alt" ${index === 0 ? "disabled" : ""} onclick="prev()">Prev</button>
            <button class="btn" ${index === 27 ? "disabled" : ""} onclick="next()">Next</button>
          </div>
        </div>
      </section>
    `;
    speak(item[0]);
  }

  window.prev = () => { if (index > 0) { index--; render(); } };
  window.next = () => { if (index < 27) { index++; render(); } };

  render();
}

function startQuiz() {
  let count = 0;
  let score = 0;

  function render() {
    if (count >= 5) {
      stars += score;
      localStorage.setItem("arabicKidsStars", stars);
      app.innerHTML = `
        <section class="section">
          <div class="result">
            <h2>🎉 Quiz Completed!</h2>
            <p>You earned <strong>${score}</strong> stars! ⭐</p>
            <button class="btn" onclick="home()">Go Home</button>
          </div>
        </section>
      `;
      return;
    }

    const current = letters[Math.floor(Math.random() * letters.length)];
    let options = [current];

    while (options.length < 4) {
      let r = letters[Math.floor(Math.random() * letters.length)];
      if (!options.includes(r)) options.push(r);
    }
    options.sort(() => Math.random() - 0.5);

    app.innerHTML = `
      <section class="section">
        <button class="back" onclick="home()">← Home</button>
        <div class="quiz">
          <h2>Question ${count + 1} of 5</h2>
          <div class="ql">${current[0]}</div>
          <div class="choices">
            ${options.map(o => `
              <button class="choice" onclick="checkAnswer('${o[1]}', '${current[1]}')">${o[1]}</button>
            `).join('')}
          </div>
        </div>
      </section>
    `;
    speak(current[0]);
  }

  window.checkAnswer = (ans, correct) => {
    if (ans === correct) score++;
    count++;
    render();
  };

  render();
}

function memoryGame() {
  app.innerHTML = `
    <section class="section">
      <button class="back" onclick="home()">← Home</button>
      <div class="title"><h2>🧠 Memory Game</h2><p>Find the pairs!</p></div>
      <div class="memory" id="memGrid"></div>
    </section>
  `;

  const selected = letters.slice(0, 4);
  let cards = [...selected, ...selected].sort(() => Math.random() - 0.5);
  let first = null;
  const grid = document.getElementById("memGrid");

  cards.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "mem";
    btn.textContent = "?";
    btn.onclick = () => {
      btn.textContent = c[0];
      btn.classList.add("open");
      speak(c[0]);

      if (!first) {
        first = { card: c, btn: btn };
      } else {
        if (first.card[0] === c[0]) {
          first = null;
        } else {
          setTimeout(() => {
            btn.textContent = "?";
            btn.classList.remove("open");
            first.btn.textContent = "?";
            first.btn.classList.remove("open");
            first = null;
          }, 800);
        }
      }
    };
    grid.appendChild(btn);
  });
}

function tajweedCorner() {
  app.innerHTML = `
    <section class="section">
      <button class="back" onclick="home()">← Home</button>
      <div class="title"><h2>✨ Tajweed Corner</h2></div>
      <div class="taj">
        ${letters.map(l => `
          <div>
            <b>${l[0]}</b> <span>${l[1]}</span>
            <div>${l[2].split(', ').map(t => `<span class="tag">${t}</span>`).join('')}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function dailyArabic() {
  const today = letters[new Date().getDate() % 28];
  app.innerHTML = `
    <section class="section">
      <button class="back" onclick="home()">← Home</button>
      <div class="daily">
        <h2>☀️ Letter of the Day</h2>
        <div class="arabic">${today[0]}</div>
        <h3>${today[1]}</h3>
        <p>${today[2]}</p>
        <button class="btn" onclick="speak('${today[0]}')">🔊 Listen</button>
      </div>
    </section>
  `;
  speak(today[0]);
}

function myProgress() {
  app.innerHTML = `
    <section class="section">
      <button class="back" onclick="home()">← Home</button>
      <div class="result">
        <h2>🏆 My Progress</h2>
        <p>Total Stars: <strong>${stars}</strong> ⭐</p>
        <p>Keep learning every day!</p>
      </div>
    </section>
  `;
}

function installInfo() {
  alert("Ilovani telefonga o'rnatish uchun brauzer menyusidan 'Add to Home Screen' (Ekraningizga qo'shish) tugmasini bosing.");
}

// Dasturni ishga tushirish
home();
