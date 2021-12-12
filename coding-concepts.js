// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

a) Your answer: I belive that . split will return an array ["E", "c"......]
b) Verify and explain: It did return an array with each value in single qoutes and a comma 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

a) Your answer: when const greeter is invoked and "LEARN Student" get passed in as an agurment, it will "replace" anywhere where (name) is

b) Verify and explain: Oh you got me, undefined, there is no return 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

a) Your answer: I don't remember if HOF need a return but if it doesn't it will return an array of the same length and each value will be multiplied by 3.

b) Verify and explain: Indeed, HOF doesnt need a return answer is correct.



// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

a) Your answer:It will return an array with the values that are NOT even

b) Verify and explain:Correct it returned and array with [ 11, 13, 15 ] which are not even



// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

a) Your answer: It return "JS" since it is in the index of 0 in the languages array.

b) Verify and explain: correct it returned JS


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

a) Your answer:I think, it will pass in the argument of geroge into the class learn, and return george delta 2021

b) Verify and explain: It returned the key and value pair while passing in the agurment of george.
