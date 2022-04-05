function myDoWhile(){
    var i= 0;
    var myNumbers= "";
    do{
        myNumbers = myNumbers + i + ", ";
        i++;
    }while(i<10);
    myNumbers = myNumbers.slice(0,-2);
    return myNumbers;
}
console.log(myDoWhile());
myDoWhile();
 module.exports = myDoWhile;