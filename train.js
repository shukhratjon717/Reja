const moment = require("moment")

// // Task-B
// function findNum(num) {
//     let count = 0;
//     for (let i = 0; i < num.length; i++) {
//          if(!isNaN(num[i])){
//         count++
//          }
//       }
//     return count
//    }
   
//   let result = findNum('hello561')
//   console.log(result)

// // Task-A 

// // let result = [];
// // function findNum(letter, word) {
// //   for(let i = 0; i <= word.length; i++) {
// //     if(word[i] === letter) {
// //        result.push(word[i])
// //     }
// //   }
  
// //   return "Task-A",result.length;
// // }
// // findNum("e", "engeenee")

class Shop {
  // state 
  
  //constructor
  constructor(apple, bread, water) {
    this.apple = apple;
    this.bread = bread;
    this.water = water;
  }
  
  sotish(product, amount){
    let time = moment().format("HH:MM:ss")
    if(product === "apple") {
      if(this.apple >= amount) {
        this.apple -= amount;
      }else {
        console.log(`Sorry, we do not have enough product now!`)
        console.log(`We have ${this.apple} apples in out store now!`)
      }
  
    }else if(product === "bread") {
      if(this.bread >= amount) {
        this.bread - amount
      }else {
        console.log(`Sorry, we do not have enough bread now!`)
        console.log(`We have ${this.bread} pieces of bread in our store now!`)
      }
    }else if(product === "water") {
      if(this.water >= amount) {
        this.water -= amount
      }else {
        console.log(`Sorry, we do not have enough water now!`)
        console.log(`We have ${this.water} water in our store now!`)  
      }
    }else {
      console.log("Sorry!, the product you are askig is not present in our store")
    }
  }
  
  qabul(product, amount){
    if ( product === "apple") {
        if (this.apple <= amount) {
          this.apple += amount
          console.log(`we accepted ${this.apple - apple} apples now`)
        }else {
          console.log("You entered unidentified item, please try again!")
        }
    }else if(product === "bread") {
        if(this.bread <= amount) {
          this.bread += amount;
          console.log(`we accepted ${this.bread - bread} pieces of bread in our store now`)
        }else {
          console.log("Plese enter valid item and amount")
        }
    }else if (product === "water") {
        if(this.water <= amount) {
          this.water += amount;
          console.log(`we accepted ${this.water - water} bottles of water  now`)
        }else {
          console.log("Please enter valid item and number!")
        }
    } else {
      console.log("Sorry, we will consider your products!")
    }
  }
  
  qoldiq(product) {
    let time = moment().format("HH:MM:ss")

    if(product === "apple") {
       console.log(`now at this ${time} time, we have ${this.apple} pieces of bread left in our store now`)
    } else if (product === "bread") {
      console.log(`now at this ${time} time, we have ${this.bread} pieces of bread left in our store now`)
    } else if (product === "water") {
      console.log(`now at this ${time} time, we have ${this.water} pieces of bread left in our store now`)
    }
  }
}

let apple = 5
let bread = 7;
let water = 8
const shop = new Shop (apple, bread, water)

// shop.qoldiq()
shop.sotish('apple',6)
shop.sotish('bread',6)
shop.qabul("bread", 9)
shop
shop.qabul("water", 10)
shop.qoldiq("bread")

