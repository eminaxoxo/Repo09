function myForLoop1(){
    var evenNumbers = "";
    var i;

     for(i=0; i<10; i++){

          if(i%2 == 0){
              evenNumbers = evenNumbers + i + ",";
          }



      }
      evenNumbers = evenNumbers.slice(0,-1);
      return evenNumbers;

}

myForLoop1();
console.log(myForLoop1());



function myForLoop2(){
    var evenInverseNumber = "";
    var i;

     for(i=9; i>=0; i--){

          if(i%2 == 0){
              evenInverseNumber = evenInverseNumber + i + ",";
          }



      }
      evenInverseNumber = evenInverseNumber.slice(0,-1);
      return evenInverseNumber;
}

myForLoop2();
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};

//tacno je 