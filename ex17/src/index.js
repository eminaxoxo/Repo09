//only change code below this line 
function inverseWhile(){
    var fiveNumbers = "";
    var i = 5;
    while(i>=0){
    fiveNumbers = fiveNumbers + i + ",";
    i--;
    }
    fiveNumbers = fiveNumbers.slice(0, -1);
    return fiveNumbers;
    }
    
    console.log(inverseWhile());
    
    module.exports = inverseWhile;