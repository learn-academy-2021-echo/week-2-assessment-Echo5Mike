// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
// Write a test for a function that logs "eat food" if you are hungry and "keep working" if you are not hungry

// describe("areYouHungry", () => {
//     it("returns eat food or keep working based on input", () => {
//       expect(areYouHungry("yes")).toEqual("eat food")
//       expect(areYouHungry("no")).toEqual("keep working")
//     })
// })
// 















//--------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// a) Create a test with expect statements for each of the variables provided.

// first we are going to get a jest test template
// we are going to "update" the test with my requirements.
// run test and let it fail
describe("isItDivisble", () => {
    var num1 = 15
    var num2 = 0
    var num3 = -7

    it("takes in a number variable and returns a string if its divisible or not", () => {
      expect(isItDivisble(15)).toEqual("15 is divisible by three")
      expect(isItDivisble(0)).toEqual("0 is divisible by three")
      expect(isItDivisble(-7)).toEqual("-7 is not divisible by three")
    })
})
//test fail marvelously.
// start writing function that will take in a number vairble 
// funtion will need a conditional      % !==0
// return string interpulation

// const isItDivisble =(num) =>{
//     if(num % 3 !== 0){
//         return `${num} is not divisible by three`
//     } else if (num % 3 === 0){
//         return `${num} is divisible by three`
//     }
// }
// I made the test, I had a problem with having it passed then I realized that I was having the num%2 instead of num%3
const isItDivisble =(num) =>{
    return (num % 3 !== 0) ? `${num} is not divisible by three` : `${num} is divisible by three`
//this is my refactored code.  I had to use the trinary operator. I was trying to add a else statement, but couldn't figure out the syntax
}

// var num1 = 15
// Expected output: "15 is divisible by three"
// var num2 = 0
// Expected output: "0 is divisible by three"
// var num3 = -7
// Expected output: "-7 is not divisible by three"
// b) Create the function that makes the test pass.







// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// a) Create a test with expect statements for each of the variables provided.

// I will copy a template of a jest test, modify the test to follow the desired outcome,let the test fail.
// test must take in array and capitalize all THE FIRST letters and return array

describe("capFirstLetter", () => {
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

    it("takes in an array of strings and returns array of stings with first letter capitalized", () => {
      expect(capFirstLetter(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capFirstLetter(["temperature", "database", "chopsticks", "mango", "deduction"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})
//function must take in an array, 
// I must split or join array to get it in string to capitalize it.
//maybe a .map will work

// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


const capFirstLetter = (array)=>{
    let capLetterArray = array.map(value =>{
        return value[0].toUpperCase() + value.substring(1)
        // return value[1].toUpperCase() + value.substring(1)
        // I was thinking of a way to map over the array.  I had to use the syllabus to help me out with this one. I was thinking that value would count through the whole array, but it actually starts at every index.
    })
    return capLetterArray
}

// console.log(capFirstLetter(randomNouns1))


// b) Create the function that makes the test pass.























// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// a) Create a test with expect statements for each of the variables provided.
// I will copy a template of a jest test, modify the test to follow the desired outcome,let the test fail.

describe("vowelFinder", () => {
    var vowelTester1 = "learn"
    var vowelTester2 = "academy"
    var vowelTester3 = "challenges"

    it("takes in a string and returns the index of the first vowel", () => {
      expect(vowelFinder("learn")).toEqual(1)
      expect(vowelFinder("academy")).toEqual(0)
      expect(vowelFinder("challenges")).toEqual(2)
    })
})
// //i'm thinking that a for loop might work here or maybe just the .forEach
// //a for loop will work on strings, .forEach is for an Array.
// //
const vowelFinder =(string)=>{
let stringToArray = string.split("")
//need to make a string to array
let empty =[]   
    stringToArray.forEach((value, index) => {
        // I couldn't get the for loop to work so I indeed up with .foreach
        if (value === "a" || value ==="e"|| value ==="i"|| value ==="o"|| value ==="u"){
            // console.log(index);
            return empty.push(index)
        }
        // console.log(value);
        return //keep getting undefined
    });
    return empty[0]// with my .foreach I kept getting all the vowels, push all the vowels into array and call on [0] 

}
// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenges"
// // Expected output: 2
