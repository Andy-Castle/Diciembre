// function printQuiz(questions) {
//   questions.forEach((question) => {
//     console.log(question.description);
//     switch (question.type) {
//       case "boolean":
//         console.log("1. True");
//         console.log("2. False");
//         break;

//       case "multipleChoice":
//         question.options.forEach((option, index) => {
//           console.log(`${index + 1}. ${option}`);
//         });
//         break;

//       case "text":
//         console.log("Answer: _________________");
//         break;
//       case "range":
//         console.log("Minimum: _________________");
//         console.log("Maximum: _________________");

//         break;
//     }
//     console.log("");
//   });
// }

// const questions = [
//   {
//     type: "boolean",
//     description: "This video is useful.",
//   },
//   {
//     type: "multipleChoice",
//     description: "What is your favorite language?",
//     options: ["CSS", "HTML", "JS", "Python"],
//   },
//   {
//     type: "text",
//     description: "Describe your favorite JS feature.",
//   },
//   {
//     type: "range",
//     description: "What is the speed limit in your city?",
//   },
// ];

// printQuiz(questions);

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoice {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Answer: _________________");
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Minimum: _________________");
    console.log("Maximum: _________________");
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
}

const questions = [
  new BooleanQuestion("This video is useful."),
  new MultipleChoice("What is your favorite language?", [
    "CSS",
    "HTML",
    "JS",
    "Python",
  ]),
  new TextQuestion("Describe your favorite JS feature."),
  new RangeQuestion("What is the speed limit in your city?"),
];

printQuiz(questions);

/*El open closed dice que si una es cambiada el otro no lo cambias,
osea si agregamos un nuevo type y description a questions, no tendriamos
que cambiar la función, pero tambien debe ser open el el proposito de poder
manipularlo sin la necesidad de tocar la función */

/*Que el codigo viejo sea capaz de trabajar con codigo viejo,
pero no siempre hay que seguir esto */
