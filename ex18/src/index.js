function myForLoop1(){
    var evenNumbers = "";
    var i;
   
     for(i=0; i<10; i++){
        
          if(i%2 == 0){
              evenNumbers = evenNumbers + i + ", ";
          }
        
        
       
      }
      evenNumbers = evenNumbers.slice(0,-2);
      return evenNumbers;
   
}

myForLoop1();
console.log(myForLoop1());



function myForLoop2(){
    var evenInverseNumbers = "";
    var i;
   
     for(i=9; i>=0; i--){
        
          if(i%2 == 0){
              evenInverseNumbers = evenInverseNumbers + i + ", ";
          }
        
        
       
      }
      evenInverseNumbers = evenInverseNumbers.slice(0,-2);
      return evenInverseNumbers;
}

myForLoop2();
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};
