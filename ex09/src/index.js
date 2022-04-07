function logicalOrOperator(num) {
    if (num > 30 || num < 20) {
        return "Out";
    }
    return "In";
}

console.log(logicalOrOperator(0));
console.log(logicalOrOperator(9));
console.log(logicalOrOperator(20));
console.log(logicalOrOperator(23));
console.log(logicalOrOperator(30));
console.log(logicalOrOperator(31));
console.log(logicalOrOperator(105));

module.exports = logicalOrOperator;

  logicalOrOperator(0);
  logicalOrOperator(9);
  logicalOrOperator(20);
  logicalOrOperator(23);
  logicalOrOperator(30);
  logicalOrOperator(31);
  logicalOrOperator(105);

  module.exports = logicalOrOperator;
