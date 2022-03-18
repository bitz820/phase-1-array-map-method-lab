const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// 1. get access to each sentence 
// 2. isolate each eachWord
// 3. capitalize each first letter only
// 4. return the array


const titleCased = () => {
  return tutorials.map((sentence) =>{
    const eachWord = sentence.split(' ')
    const capFirst = eachWord.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    const answer = capFirst.join(' ')
    return answer
  })
}
titleCased()

// const titleCased = () => {
//   let words = tutorials.split(' ');
//   let firstLetter = tutorials.map(words => words.charAt(0).toUpperCase());
//   let restOfWord = tutorials.map((words) => words.slice(1));
//   return firstLetter + restOfWord
// }

// function titleCaseString(arr){
//   let eachWord = arr.split(' ');
//   // if (eachWord[0]!==Number){
//   //   return eachWord[0].toUpperCase()
//   // }
//   console.log(eachWord)
// }


// function callback(array) {
//   for (let index of array) {
//     let singleWord = index.split(' ');
//     console.log(singleWord)
//     for (let i = 0; i < singleWord.length; i++) {
  
//       if (singleWord[i][0] !== Number) {
//         singleWord[i] = singleWord[i][0].toUpperCase() + singleWord[i].slice(1);
//       }
//       singleWord.join('')
//     }
//     return singleWord
//   }
// }
// callback(tutorials)

// const titleCased = tutorials.map(() => {
//   const makeLetterUpper = 
// })