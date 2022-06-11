// Defining Field Variables

const questionEl = document.getElementById("questions");
const choicesEl = document.getElementById("answers");
const endGame = document.getElementById("gameover");
const viewScores = document.getElementById("highscores");
const timer = document.getElementById("timer");
const startGame = document.getElementById("start-game");
const scoreList = document.getElementById("scorelist");
const submitUser = document.getElementById("submitBtn");
const newGame = document.getElementById("newgame");
let result = document.getElementById("result-span");
let timeValue = "60";
let qIndex = "0";
let nextQuestion = "";
let userScore = "0";

// Setting fields to hidden initially

questionEl.style.display = "none";
choicesEl.style.display = "none";
endGame.style.display = "none";
viewScores.style.display = "none";
timer.style.display = "none";
newGame.style.display = "none";

// Creating array for questions

const questions = [
  {
    title: "What is JavaScript?",
    choices: [
      {
        title: "An interesting coffee blend",
        isAnswer: false,
      },
      {
        title: "Something your doctor uses",
        isAnswer: false,
      },
      {
        title: "A new movie",
        isAnswer: false,
      },
      {
        title: "A coding language",
        isAnswer: true,
      },
    ],
  },
  {
    title: "Which of the following keywords is used to define a variable?",
    choices: [
      {
        title: "var",
        isAnswer: false,
      },
      {
        title: "let",
        isAnswer: false,
      },
      {
        title: "Both A and B",
        isAnswer: true,
      },
      {
        title: "None of the above",
        isAnswer: false,
      },
    ],
  },
  {
    title: "What are functions?",
    choices: [
      {
        title: "Large gatherings of programmers",
        isAnswer: false,
      },
      {
        title: "Something developers use to check if code is working",
        isAnswer: false,
      },
      {
        title: "Dinner and drinks",
        isAnswer: false,
      },
      {
        title: "Tiny factories(input>process>output",
        isAnswer: true,
      },
    ],
  },

  {
    title: "What does NaN stand for?",
    choices: [
      {
        title: "Not a Number",
        isAnswer: true,
      },
      {
        title: "No and No",
        isAnswer: false,
      },
      {
        title: "Null and None",
        isAnswer: false,
      },
      {
        title: "Not another Negative",
        isAnswer: false,
      },
    ],
  },

  {
    title: "What function will stop an interval timer in JavaScript?",
    choices: [
      {
        title: "clearTimer",
        isAnswer: false,
      },
      {
        title: "clearInterval",
        isAnswer: true,
      },
      {
        title: "intervalOver",
        isAnswer: false,
      },
      {
        title: "None of the above",
        isAnswer: false,
      },
    ],
  },

  {
    title: "How do you write a comment in JavaScript?",
    choices: [
      {
        title: "/* /*",
        isAnswer: false,
      },
      {
        title: "<!-- --!>",
        isAnswer: false,
      },
      {
        title: "//",
        isAnswer: true,
      },
      {
        title: "$ $",
        isAnswer: false,
      },
    ],
  },

  {
    title: "How do you link JavaScript inside HTML?",
    choices: [
      {
        title: "<js>",
        isAnswer: false,
      },
      {
        title: "<JavaScript>",
        isAnswer: false,
      },
      {
        title: "<Script>",
        isAnswer: true,
      },
      {
        title: "<Java>",
        isAnswer: false,
      },
    ],
  },

  {
    title: "Where do you put your script inside HTML?",
    choices: [
      {
        title: "In the <HTML> element",
        isAnswer: false,
      },
      {
        title: "In the <HEAD> element",
        isAnswer: false,
      },
      {
        title: "At the beginning of the <BODY> tag",
        isAnswer: false,
      },
      {
        title: "At the end of the <BODY> tag",
        isAnswer: true,
      },
    ],
  },

  {
    title: "What is a boolean?",
    choices: [
      {
        title: "A true or false statement",
        isAnswer: true,
      },
      {
        title: "A length of rope or string",
        isAnswer: false,
      },
      {
        title: "A dessert",
        isAnswer: false,
      },
      {
        title: "None of the above",
        isAnswer: false,
      },
    ],
  },

  {
    title: "How do you write a message in the console?",
    choices: [
      {
        title: "log.console()",
        isAnswer: false,
      },
      {
        title: "console.log()",
        isAnswer: true,
      },
      {
        title: "console.log = ''",
        isAnswer: false,
      },
      {
        title: "console.out()",
        isAnswer: false,
      },
    ],
  },
];

// Start game when buttons clicked

startGame.addEventListener("click", function (event) {
  onStart();
  grabQuestion(0);
});

submitUser.addEventListener("click", function (event) {
  event.preventDefault;
  showScores();
});

// Grab question function

function grabQuestion(questionIndex) {
  // Get Question
  const question = questions[questionIndex];
  questionEl.textContent = question.title;
  choicesEl.textContent = "";
  // Generate choices
  let choices = question.choices;
  for (let index = 0; index < choices.length; index++) {
    let choice = choices[index];

    // Create buttons for choices
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.setAttribute("class", "btn");
    li.setAttribute("id", "list");
    button.textContent = choice.title;

    // Attach buttons to document
    li.appendChild(button);
    choicesEl.append(li);
    button.addEventListener("click", function (event) {
      if (choice.isAnswer) {
        // Give correct feedback and add score
        alert("Correct!");
        userScore++;
      } else {
        // Give incorrect feedback and deduct time
        alert("Sorry not quite");
        timeValue = timeValue - 10;
      }
      // Next question or end game if all questions answered
      newQuestion = questionIndex + 1;
      if (newQuestion >= questions.length) {
        onFinish();
      } else {
        grabQuestion(newQuestion);
      }
    });
  }
}

// On starting the game reveal questions/choices

function onStart() {
  // Reveal fields
  timer.style.display = "";
  questionEl.style.display = "";
  choicesEl.style.display = "";
  startGame.style.display = "none";
  endGame.style.display = "none";
  viewScores.style.display = "none";

  // Start timer

  timerCount = setInterval(function (myTimer) {
    timeValue = timeValue - 1;
    timer.textContent = "Time Remaining: " + timeValue;
    if (timeValue <= 0) {
      clearInterval(timerCount);
      onFinish();
    }
  }, 1000);
}

// End game function

function onFinish() {
  timer.style.display = "none";
  questionEl.style.display = "none";
  choicesEl.style.display = "none";
  endGame.style.display = "";
  result.textContent = userScore + "/10";
  clearInterval(timerCount);
}

// Highscores and new game function

function showScores() {
  const userName = document.getElementById("userinitials").value;
  viewScores.style.display = "";
  newGame.style.display = "";
  const scoreLi = document.createElement("li");
  const scoreEl = document.createElement("span");
  scoreEl.textContent = userName + ": " + userScore;
  scoreLi.appendChild(scoreEl);
  viewScores.append(scoreLi);

  // New Game

  newGame.addEventListener("click", function (event) {
    event.preventDefault;
    timerCount = setInterval(timerCount, 1000);
    timeValue = "60";
    newGame.style.display = "none";
    userScore = "0";
    grabQuestion(0);
    onStart();
  });
}
