// Task F

function findCouple(str) {
  const txt = str.split("");
  const arr = [...new Set(txt)];
  if (txt.length === arr.length) {
    console.log("false")
  }
  else {
    console.log("true")
  }
}

findCouple("aplep")



