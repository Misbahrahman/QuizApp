let topicBtn = document.getElementsByClassName("topic");
let choosenTopics = [];

for (let i = 0; i < topicBtn.length; i++) {
  let ele = topicBtn[i];
  ele.addEventListener("click", () => {
    
    var computedStyle = window.getComputedStyle(ele);
    var currentColor = computedStyle.backgroundColor;

    if (currentColor !== "rgb(255, 200, 37)") {
        ele.style.backgroundColor = "#FCC825";
        console.log(ele.style.backgroundColor);
    } else {
        ele.style.backgroundColor = "#D1D1D1";
    }
    
    choosenTopics.push(ele.innerText);
  });
}

let quizData = {
  questions: [
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Harper Lee",
        "George Orwell",
        "Jane Austen",
        "F. Scott Fitzgerald",
      ],
      answer: "Harper Lee",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Who is known as the 'Father of Computer Science'?",
      options: [
        "Alan Turing",
        "Ada Lovelace",
        "Charles Babbage",
        "John von Neumann",
      ],
      answer: "Alan Turing",
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1920", "1931"],
      answer: "1912",
    },
    {
      question: "Who is the author of '1984'?",
      options: [
        "George Orwell",
        "Aldous Huxley",
        "Ray Bradbury",
        "F. Scott Fitzgerald",
      ],
      answer: "George Orwell",
    },
  ],
};

let score = 0;
let total_score = 50;

let n = quizData.length;
let i = 0;

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion(i);
});

let nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", () => {
  if (i == quizData.questions.length - 1) {

    let baap = nextBtn.parentElement;
    //adding score
    let newEle = document.createElement("div");
    newEle.innerText = "Your Final Score is  "+ score;
    newEle.style.fontSize = "20px";
    newEle.style.fontWeight = "600";
    newEle.style.backgroundColor = "#FCC822";
    newEle.style.padding = "10px";

    baap.insertBefore(newEle, nextBtn);
    baap.style.justifyContent = "center";
    baap.removeChild(prevBtn);
    baap.removeChild(nextBtn);

  } else {
    i += 1;
    loadQuestion(i);
  }

  console.log(i, score);
});

let prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", () => {
  if (i > 0) {
    i -= 1;
    loadQuestion(i);
  }
  console.log(i);
});

let options = document.getElementsByClassName("option");

let optionA = document.getElementById("option1");
let optionB = document.getElementById("option2");
let optionC = document.getElementById("option3");
let optionD = document.getElementById("option4");

function loadQuestion(i) {
  let questionEle = document.getElementById("question");
  questionEle.innerText = quizData.questions[i].question;

  reset();

  optionA.innerText = quizData.questions[i].options[0];
  optionB.innerText = quizData.questions[i].options[1];
  optionC.innerText = quizData.questions[i].options[2];
  optionD.innerText = quizData.questions[i].options[3];
}

function reset() {
  for (let i = 0; i < 4; i++) {
    let ele = options[i];
    ele.style.backgroundColor = "#D1D1D1";
  }
}

function selectOption(ele) {
  ele.style.backgroundColor = "#fcc822";
  if (ele.innerText == quizData.questions[i].answer) score += 5;
}

for (let x = 0; x < 4; x++) {
  let ele = options[x];
  ele.addEventListener("click", () => {
    reset();
    selectOption(ele);
  });
}
