// Task-B
function findNum(num) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
         if(!isNaN(num[i])){
        count++
         }
      }
    return count
   }
   
  let result = findNum('hello561')
  console.log(result)

// Task-A 

// let result = [];
// function findNum(letter, word) {
//   for(let i = 0; i <= word.length; i++) {
//     if(word[i] === letter) {
//        result.push(word[i])
//     }
//   }
  
//   return "Task-A",result.length;
// }
// findNum("e", "engeenee")

