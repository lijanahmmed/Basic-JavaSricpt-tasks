const person1 = {
    name: "Rajib", 
    testScore: 45, 
    schoolGrade: 25,
    isFFamily : true
}
const person2 = {
    name: "Rajib", 
    testScore: 51, 
    schoolGrade: 25,
    isFFamily : false
}
const person3 = {
    name: "Rajib", 
    testScore: 15, 
    schoolGrade: 23,
    isFFamily : true
}
const person4 = "hello";

function calculateFinalScore(obj) {
    if( typeof obj !== "object"){
        return "Invalid Input";
    }
    else if( (typeof obj.name !== "string") || (typeof obj.testScore !== "number") || (obj.testScore > 50) || (typeof obj.schoolGrade !== "number") || (obj.schoolGrade > 30) || (typeof obj.isFFamily !== "boolean") ){
        return "Invalid Input";
    }
    let finalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        finalScore = finalScore + 20;
    }
   
    if(finalScore >= 80){
        return true;
    }
    else{
        return false;
    }
}

console.log(calculateFinalScore(person1));
console.log(calculateFinalScore(person2));
console.log(calculateFinalScore(person3));
console.log(calculateFinalScore(person4));



// Output
// true
// Invalid Input
// false
// Invalid Input