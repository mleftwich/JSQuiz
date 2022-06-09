// Defining Field Variables

const questionEl = document.getElementById("questions");
const choicesEl = document.getElementById("answers");
const endGame = document.getElementById("gameover");
const viewScores = document.getElementById("highscores");
const timer = document.getElementById("timer");
const startGame = document.getElementById("start-game");
let timeValue = "60";
let qIndex = "0";
let nextQuestion = "";

// Setting fields to hidden initially

questionEl.style.display = "none";
choicesEl.style.display = "none";
endGame.style.display = "none";
viewScores.style.display = "none";
timer.style.display = "none";

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

// Grab question function

function grabQuestion(questionIndex) {
  // Get Question
  // let qIndex = 0;
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
        alert("correct!");
      } else {
        alert("sorry not quite");
        timeValue = timeValue - 10;
      }
      newQuestion = questionIndex + 1;
      grabQuestion(newQuestion);
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
  timerCount = setInterval(function () {
    timeValue = timeValue - 1;
    timer.textContent = "Time Remaining: " + timeValue;
    if (timeValue <= 0) {
      clearInterval(timerCount);
      endGame.style.display = "";
      viewScores.style.display = "";
    }
  }, 1000);
}

// Setting and displaying timer - end game if timer runs out

// Start game when buttons clicked

startGame.addEventListener("click", function (event) {
  onStart();
  grabQuestion(0);
});
