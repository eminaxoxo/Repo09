function functionElse(num) {
  if (num <= 5) {
    var result;
    result= "5 or smaller";
  } else if (num >= 5) {
    result= "Bigger than 5";
  }
  return result;
}
console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));

// Only change code above this line
module.exports = functionElse;