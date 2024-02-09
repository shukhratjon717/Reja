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

console.log("Jack Ma maslahatlari!")
const list = [
    "Be a good student", // 0-20
    "Choose a good leader and make lots of mistakes", // 20-30
    "Work on yourself", // 30-40
    "Do what you are good at", // 40-50
    "Invest in youth", // 50-60
    "Rest now, it is late", // 60
];


// Callback functions
function giveAvice(age, callback) {
    if(typeof age !== "number") callback("Enter a number", null)
    else if (age <=20) callback(null, list[0]);
   else if (age >  20 && age <= 30) callback(null, list[1]);
   else if (age > 30 && age <= 40) callback(null, list[2]);
   else if (age > 40 &&  age <= 50) callback(null, list[3]);
   else if (age > 50 && age <= 60) callback(null, list[4]);
   else {
    //     setInterval(function () {
    //      callback(null, list[5])
    //    }, 1000);
    setTimeout(function () {
        callback(null, list[5])
      }, 1000);
    

};
};
    console.log("passed here 0");
giveAvice(65, (err, data) => {
   if(err) console.log("ERROR", err);
   else {
    console.log("Javob:", data);
   }
});

console.log("passed here 1");

// Asynchronous functionlarn qo'llash

//  async function giveAvice(age) {
//     if(typeof age !== "number") throw new Error("Enter a number")
//     else if (age <=20) return list[0];
//    else if (age >  20 && age <= 30)return list [1];
//    else if (age > 30 && age <= 40) return list [2];
//    else if (age > 40 &&  age <= 50)return list [3];
//    else if (age > 50 && age <= 60)return list[4];
//    else {
//     return new Promise((resolve, reject) => {
  
//     setTimeout(function () {
//         resolve(list[5]);
//        }, 5000);
//     setInterval(() => {
//         resolve(list[5]);
//     }, 1000)
// })   


// };
// };
// // then/catch
// //     console.log("passed here 0");
// // giveAvice(25).then(data => {
// //     console.log("Javob:", data);
// // }).catch(() => {
// //     console.log("ERROR", err);
// // });
// // console.log("passed here 1");

// async function run() {
//     let javob = await giveAvice(65);
//     console.log(javob);
//     javob = await giveAvice(31);
//     console.log(javob);
//     javob = await giveAvice(41);
//     console.log(javob)
// }
// run();