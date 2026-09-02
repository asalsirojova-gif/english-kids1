// ========================================
// ARABIC KIDS - MAIN JAVASCRIPT
// ========================================

// 28 Arabic Letters
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


// ========================================
// GLOBAL VARIABLES
// ========================================

const app = document.getElementById("app");
const soundButton = document.getElementById("sound");

let soundEnabled = true;

let stars = Number(
  localStorage.getItem("arabicKidsStars") || 0
);


// ========================================
// SOUND BUTTON
// ========================================

if (soundButton) {
  soundButton.addEventListener("click", () => {

    soundEnabled = !soundEnabled;

    soundButton.textContent = soundEnabled
      ? "🔊"
      : "🔇";
  });
}


// ========================================
// TEXT TO SPEECH
// ========================================

function speak(text) {

  if (!soundEnabled) return;

  if (!("speechSynthesis" in window)) return;

  try {

    window.speechSynthesis.cancel();

    const voice = new SpeechSynthesisUtterance(text);

    voice.lang = "ar-SA";
    voice.rate = 0.6;
    voice.pitch = 1;

    window.speechSynthesis.speak(voice);

  } catch (error) {

    console.log("Speech error:", error);

  }
}


// ========================================
// HOME
// ========================================

function home() {

  if (!app) return;

  app.innerHTML = `

    <section class="hero">

      <h1>🌈 Arabic Kids</h1>

      <p>
        Learn Arabic letters, play games
        and discover Tajweed.
      </p>

    </section>


    <div class="grid">

      <button class="card c1"
        onclick="learnLetters()">

        <span class="e">📚</span>

        <h3>Learn Letters</h3>

        <p>
          Learn all 28 Arabic letters.
        </p>

      </button>


      <button class="card c2"
        onclick="startQuiz()">

        <span class="e">🎯</span>

        <h3>Quiz Challenge</h3>

        <p>
          Test your Arabic knowledge.
        </p>

      </button>


      <button class="card c3"
        onclick="memoryGame()">

        <span class="e">🧠</span>

        <h3>Memory Game</h3>

        <p>
          Match the Arabic letters.
        </p>

      </button>


      <button class="card c4"
        onclick="tajweedCorner()">

        <span class="e">✨</span>

        <h3>Tajweed Corner</h3>

        <p>
          Explore letter qualities.
        </p>

      </button>


      <button class="card c5"
        onclick="dailyArabic()">

        <span class="e">☀️</span>

        <h3>Daily Arabic</h3>

        <p>
          Practice one letter every day.
        </p>

      </button>


      <button class="card c6"
        onclick="myProgress()">

        <span class="e">🏆</span>

        <h3>My Progress</h3>

        <p>
          See your stars and level.
        </p>

      </button>

    </div>


    <button class="install"
      onclick="installInfo()">

      📲 Install Arabic Kids

    </button>

  `;
}


// ========================================
// LEARN LETTERS
// ========================================

function learnLetters() {

  let index = 0;


  function render() {

    const item = letters[index];

    if (!item) return;


    app.innerHTML = `

      <section class="section">

        <button class="back"
          onclick="home()">

          ← Home

        </button>


        <div class="title">

          <h2>📚 Learn Letters</h2>

          <p>
            Letter ${index + 1} of 28
          </p>

        </div>


        <div class="progress">

          <i style="
            width:${((index + 1) / 28) * 100}%;
          "></i>

        </div>


        <div class="learn">

          <div class="arabic">

            ${item[0]}

          </div>


          <div class="name">

            ${item[1]}

          </div>


          <p class="pill">

            ${item[2]}

          </p>


          <div class="actions">

            <button class="btn"
              onclick="speak('${item[0]}')">

              🔊 Listen

            </button>

          </div>


          <div class="nav">

            <button
              class="btn alt"
              ${index === 0 ? "disabled" : ""}
              onclick="previousLetter()">

              ← Prev

            </button>


            <button
              class="btn"
              ${index === 27 ? "disabled" : ""}
              onclick="nextLetter()">

              Next →

            </button>

          </div>

        </div>

      </section>

    `;
  }


  window.previousLetter = function () {

    if (index > 0) {

      index--;

      render();

      speak(letters[index][0]);

    }

  };


  window.nextLetter = function () {

    if (index < 27) {

      index++;

      render();

      speak(letters[index][0]);

    }

  };


  render();

}


// ========================================
// QUIZ - 40 QUESTIONS
// ========================================

function startQuiz() {

  let questionNumber = 0;

  let score = 0;

  const totalQuestions = 40;

  let locked = false;


  function getRandomOptions(correctLetter) {

    const options = [correctLetter];

    const usedIndexes = new Set();

    usedIndexes.add(
      letters.indexOf(correctLetter)
    );


    while (options.length < 4) {

      const randomIndex =
        Math.floor(Math.random() * letters.length);

      if (!usedIndexes.has(randomIndex)) {

        usedIndexes.add(randomIndex);

        options.push(
          letters[randomIndex]
        );

      }

    }


    return options.sort(
      () => Math.random() - 0.5
    );

  }


  function render() {

    locked = false;


    if (questionNumber >= totalQuestions) {

      showQuizResult(
        score,
        totalQuestions
      );

      return;

    }


    const current =
      letters[
        Math.floor(
          Math.random() * letters.length
        )
      ];


    const options =
      getRandomOptions(current);


    app.innerHTML = `

      <section class="section">

        <button class="back"
          onclick="home()">

          ← Home

        </button>


        <div class="quiz">

          <div class="quiz-top">

            <span>
              Question
              ${questionNumber + 1}
              / ${totalQuestions}
            </span>

            <span>
              ⭐ ${score}
            </span>

          </div>


          <div class="ql">

            ${current[0]}

          </div>


          <p class="quiz-hint">

            Which letter is this?

          </p>


          <div class="choices">

            ${options.map(option => `

              <button
                class="choice"
                onclick="
                  checkQuizAnswer(
                    this,
                    '${option[1]}',
                    '${current[1]}'
                  )
                ">

                ${option[1]}

              </button>

            `).join("")}

          </div>


          <div id="quizFeedback"
            class="quiz-feedback">

          </div>

        </div>

      </section>

    `;


    speak(current[0]);

  }


  window.checkQuizAnswer =
    function (
      button,
      selectedAnswer,
      correctAnswer
    ) {

      if (locked) return;

      locked = true;


      const allChoices =
        document.querySelectorAll(
          ".choice"
        );


      allChoices.forEach(
        choice => {

          choice.disabled = true;

        }
      );


      const feedback =
        document.getElementById(
          "quizFeedback"
        );


      if (
        selectedAnswer ===
        correctAnswer
      ) {

        score++;


        button.classList.add("good");


        if (feedback) {

          feedback.innerHTML =
            "Very good! 🌟";

          feedback.className =
            "quiz-feedback good-text";

        }


        createStarsAnimation();

      } else {

        button.classList.add("try");


        allChoices.forEach(
          choice => {

            if (
              choice.textContent.trim() ===
              correctAnswer
            ) {

              choice.classList.add("good");

            }

          }
        );


        if (feedback) {

          feedback.innerHTML =
            "Try one more time! 🌸";

          feedback.className =
            "quiz-feedback try-text";

        }

      }


      setTimeout(() => {

        questionNumber++;

        render();

      }, 1000);

    };


  render();

}


// ========================================
// SINGLE LETTER QUIZ
// ========================================

function startSingleQuiz(letterIndex) {

  if (
    letterIndex < 0 ||
    letterIndex >= letters.length
  ) {

    startQuiz();

    return;

  }


  const correct =
    letters[letterIndex];


  const otherLetters =
    letters.filter(
      (_, index) =>
        index !== letterIndex
    );


  let options = [correct];


  while (options.length < 4) {

    const random =
      otherLetters[
        Math.floor(
          Math.random() *
          otherLetters.length
        )
      ];


    if (
      !options.includes(random)
    ) {

      options.push(random);

    }

  }


  options.sort(
    () => Math.random() - 0.5
  );


  app.innerHTML = `

    <section class="section">

      <button class="back"
        onclick="home()">

        ← Home

      </button>


      <div class="quiz">

        <h2>🎯 Quick Practice</h2>

        <div class="ql">

          ${correct[0]}

        </div>


        <p class="quiz-hint">

          Choose the correct name.

        </p>


        <div class="choices">

          ${options.map(option => `

            <button
              class="choice"
              onclick="
                singleAnswer(
                  this,
                  '${option[1]}',
                  '${correct[1]}'
                )
              ">

              ${option[1]}

            </button>

          `).join("")}

        </div>


        <div
          id="singleFeedback"
          class="quiz-feedback">

        </div>

      </div>

    </section>

  `;


  speak(correct[0]);


  window.singleAnswer =
    function (
      button,
      selected,
      correctName
    ) {

      const choices =
        document.querySelectorAll(
          ".choice"
        );


      choices.forEach(
        b => b.disabled = true
      );


      const feedback =
        document.getElementById(
          "singleFeedback"
        );


      if (selected === correctName) {

        button.classList.add("good");

        if (feedback) {

          feedback.innerHTML =
            "Very good! 🌟";

          feedback.className =
            "quiz-feedback good-text";

        }


        stars++;

        saveStars();

        createStarsAnimation();

      } else {

        button.classList.add("try");


        choices.forEach(b => {

          if (
            b.textContent.trim() ===
            correctName
          ) {

            b.classList.add("good");

          }

        });


        if (feedback) {

          feedback.innerHTML =
            "Try one more time! 🌸";

          feedback.className =
            "quiz-feedback try-text";

        }

      }


      setTimeout(
        () => dailyArabic(),
        1200
      );

    };

}


// ========================================
// QUIZ RESULT
// ========================================

function showQuizResult(
  score,
  total
) {

  stars += score;

  saveStars();


  const percentage =
    Math.round(
      (score / total) * 100
    );


  let message;


  if (percentage >= 90) {

    message =
      "Amazing work! You are a star! 🌟";

  } else if (percentage >= 70) {

    message =
      "Great job! Keep learning! 🌸";

  } else if (percentage >= 50) {

    message =
      "Good effort! Try again! 💪";

  } else {

    message =
      "Keep practicing! You can do it! 🌈";

  }


  app.innerHTML = `

    <section class="section">

      <div class="result">

        <div class="result-icon">
          🏆
        </div>


        <h2>
          🎉 Quiz Completed!
        </h2>


        <div class="score-big">

          ${score}/${total}

        </div>


        <p>

          ${percentage}% correct

        </p>


        <p>

          You earned
          <strong>${score}</strong>
          stars! ⭐

        </p>


        <h3>

          ${message}

        </h3>


        <div class="result-actions">

          <button
            class="btn"
            onclick="startQuiz()">

            🔄 Play Again

          </button>


          <button
            class="btn alt"
            onclick="home()">

            🏠 Home

          </button>

        </div>

      </div>

    </section>

  `;

}


// ========================================
// STARS
// ========================================

function saveStars() {

  localStorage.setItem(
    "arabicKidsStars",
    String(stars)
  );

}


// ========================================
// STAR ANIMATION
// ========================================

function createStarsAnimation() {

  const container =
    document.createElement("div");


  container.className =
    "star-animation";


  for (let i = 0; i < 6; i++) {

    const star =
      document.createElement("span");

    star.textContent = "⭐";

    star.style.left =
      `${30 + Math.random() * 40}%`;

    star.style.animationDelay =
      `${i * 0.08}s`;

    container.appendChild(star);

  }


  document.body.appendChild(
    container
  );


  setTimeout(() => {

    container.remove();

  }, 1200);

}


// ========================================
// MEMORY GAME
// ========================================

function memoryGame() {

  const selected =
    letters.slice(0, 6);


  let cards = [
    ...selected,
    ...selected
  ];


  cards.sort(
    () => Math.random() - 0.5
  );


  app.innerHTML = `

    <section class="section">

      <button class="back"
        onclick="home()">

        ← Home

      </button>


      <div class="title">

        <h2>🧠 Memory Game</h2>

        <p>
          Find the matching pairs!
        </p>

      </div>


      <div
        class="memory"
        id="memGrid">

      </div>


      <p
        id="memoryMessage"
        class="memory-message">

      </p>

    </section>

  `;


  const grid =
    document.getElementById(
      "memGrid"
    );


  const message =
    document.getElementById(
      "memoryMessage"
    );


  if (!grid) return;


  let firstCard = null;

  let secondCard = null;

  let lockBoard = false;

  let matched = 0;


  cards.forEach(card => {

    const button =
      document.createElement(
        "button"
      );


    button.className = "mem";

    button.textContent = "?";


    button.onclick =
      function () {

        if (
          lockBoard ||
          button === firstCard ||
          button.classList.contains(
            "matched"
          )
        ) {

          return;

        }


        button.textContent =
          card[0];

        button.classList.add(
          "open"
        );


        speak(card[0]);


        if (!firstCard) {

          firstCard = button;

          return;

        }


        secondCard = button;

        lockBoard = true;


        const firstLetter =
          firstCard.dataset.letter ||
          firstCard.textContent;


        const secondLetter =
          secondCard.textContent;


        // Use stored card identity
        if (
          firstCard._letter ===
          secondCard._letter
        ) {

          firstCard.classList.add(
            "matched"
          );

          secondCard.classList.add(
            "matched"
          );


          matched++;


          if (matched === selected.length) {

            stars += 3;

            saveStars();


            if (message) {

              message.innerHTML =
                "🎉 Amazing! All pairs found! +3 ⭐";

            }

          }


          resetMemory();

        } else {

          setTimeout(() => {

            firstCard.textContent =
              "?";

            secondCard.textContent =
              "?";


            firstCard.classList.remove(
              "open"
            );

            secondCard.classList.remove(
              "open"
            );


            resetMemory();

          }, 800);

        }

      };


    // Store actual letter identity
    button._letter = card[0];


    grid.appendChild(button);

  });


  function resetMemory() {

    firstCard = null;

    secondCard = null;

    lockBoard = false;

  }

}


// ========================================
// TAJWEED CORNER
// ========================================

function tajweedCorner() {

  app.innerHTML = `

    <section class="section">

      <button class="back"
        onclick="home()">

        ← Home

      </button>


      <div class="title">

        <h2>
          ✨ Tajweed Corner
        </h2>

        <p>
          Explore Arabic letter qualities.
        </p>

      </div>


      <div class="taj">

        ${letters.map(
          letter => `

          <div class="taj-item">

            <div class="taj-head">

              <b>
                ${letter[0]}
              </b>

              <span>
                ${letter[1]}
              </span>

            </div>


            <div class="tags">

              ${letter[2]
                .split(", ")
                .map(
                  quality =>
                    `<span class="tag">
                      ${quality}
                    </span>`
                )
                .join("")}

            </div>

          </div>

        `
        ).join("")}

      </div>

    </section>

  `;

}


// ========================================
// DAILY ARABIC
// ========================================

function dailyArabic() {

  const day =
    new Date().getDate();


  const today =
    letters[
      day % letters.length
    ];


  app.innerHTML = `

    <section class="section">

      <button class="back"
        onclick="home()">

        ← Home

      </button>


      <div class="daily">

        <div class="daily-icon">
          ☀️
        </div>


        <h2>
          Letter of the Day
        </h2>


        <div class="arabic">

          ${today[0]}

        </div>


        <h3>

          ${today[1]}

        </h3>


        <p class="pill">

          ${today[2]}

        </p>


        <button
          class="btn"
          onclick="
            speak('${today[0]}')
          ">

          🔊 Listen

        </button>


        <button
          class="btn alt"
          onclick="
            startSingleQuiz(
              ${letters.indexOf(today)}
            )
          ">

          🎯 Practice

        </button>

      </div>

    </section>

  `;


  speak(today[0]);

}


// ========================================
// MY PROGRESS
// ========================================

function myProgress() {

  let level = 1;

  let levelName =
    "Beginner";


  if (stars >= 50) {

    level = 2;

    levelName =
      "Learner";

  }


  if (stars >= 100) {

    level = 3;

    levelName =
      "Explorer";

  }


  if (stars >= 200) {

    level = 4;

    levelName =
      "Arabic Star";

  }


  app.innerHTML = `

    <section class="section">

      <button class="back"
        onclick="home()">

        ← Home

      </button>


      <div class="result">

        <div class="result-icon">
          🏆
        </div>


        <h2>
          My Progress
        </h2>


        <div class="score-big">

          ⭐ ${stars}

        </div>


        <h3>

          Level ${level} —
          ${levelName}

        </h3>


        <p>

          Keep learning every day! 🌈

        </p>


        <button
          class="btn"
          onclick="startQuiz()">

          🎯 Start Quiz

        </button>

      </div>

    </section>

  `;

}


// ========================================
// INSTALL INFO
// ========================================

function installInfo() {

  alert(
    "To install Arabic Kids on your phone, open the browser menu and choose 'Add to Home Screen' or 'Install app'."
  );

}


// ========================================
// PWA INSTALL SUPPORT
// ========================================

let deferredInstallPrompt = null;


window.addEventListener(
  "beforeinstallprompt",
  event => {

    event.preventDefault();

    deferredInstallPrompt =
      event;

  }
);


async function installApp() {

  if (!deferredInstallPrompt) {

    installInfo();

    return;

  }


  deferredInstallPrompt.prompt();


  try {

    await deferredInstallPrompt.userChoice;

  } catch (error) {

    console.log(
      "Install cancelled."
    );

  }


  deferredInstallPrompt = null;

}


// ========================================
// SERVICE WORKER
// ========================================

if (
  "serviceWorker" in navigator
) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register(
          "./service-worker.js"
        )
        .then(
          registration => {

            console.log(
              "Service Worker registered:",
              registration.scope
            );

          }
        )
        .catch(
          error => {

            console.log(
              "Service Worker error:",
              error
            );

          }
        );

    }
  );

}


// ========================================
// START APPLICATION
// ========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    home();

  }
);


// Also run if DOM is already loaded
if (
  document.readyState !==
  "loading"
) {

  home();

    }
