// Task D 1st versionfunction checker(str1, str2) {
  function checker(str1, str2) {
    let sstr1 = str1.split("");
    let sstr2 = str2.split("");
    // console.log(sstr1)
    // console.log(sstr2)
    const new1 = sstr1.sort()
    const new2 = sstr2.sort()
    // console.log(new1)
    // console.log(new2)
    
    const text1 = new1.join()
    const text2 = new2.join()
    // console.log(text1)
    // console.log(text2)
    
    if( text1 === text2) {
      return true
    }else {
      return false
    } 
  }
  
  checker("hello", 'lelho')


// task D 2nd version


// function checker(str1, str2) {
//   for(let i = 0; i < str2.length; i++){
//     if(str1.includes(str2[i])) {
//     console.log(true)
//   }else {
//     console.log(false)
//   }
//   }
  
// };

// checker("hello", "elohdx ")
