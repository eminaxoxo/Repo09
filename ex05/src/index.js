function compareStrictValues(m){
    if(m!=55){
        return "Not equal";
    }
    else{
        return  "Equal";
    }
}

console.log(compareStrictValues(55));
console.log(compareStrictValues("55"));
console.log(compareStrictValues("21"));
console.log(compareStrictValues(12));
console.log(compareStrictValues("Doe"));

compareStrictValues(55);
compareStrictValues("55");
compareStrictValues("21");
compareStrictValues(12);
compareStrictValues("Doe");

module.exports = compareStrictValues;
