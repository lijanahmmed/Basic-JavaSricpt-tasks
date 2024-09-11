function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0) {
        return "Invalid Input";
    }
    else if (income < expenses) {
        return "Invalid Input";
    }   
    const profit = income - expenses;   
    const tax = profit * 0.20;    
    return tax;
}


function sendNotification(email) {
    const emailName = email.includes("@");
    if (emailName === false) {
        return "Invalid Email";
    }
    const username = email.split('@')[0];
    const domainName = email.split('@')[1];
    const result = username + " sent you an email from " + domainName;
    return result;
}


function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    for (let char of name) {
        if (!isNaN(char)) {
            return true;
        }
    }
    return false;
}


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


function waitingTime(waitingTimes, serialNumber) {
    if ( (!Array.isArray(waitingTimes)) || (typeof serialNumber !== "number") || (serialNumber <= waitingTimes.length) ) {
        return "Invalid Input";
    }  
    let totalTime = 0;
    for (let time of waitingTimes) {
        totalTime =  totalTime + time;
    }
    let averageTimePerperson = totalTime / waitingTimes.length;
    let averageTime = Math.round(averageTimePerperson);  
    let peopleBeforeSerial = serialNumber - 1;
    let remainderPeople = peopleBeforeSerial - waitingTimes.length;   
    if (remainderPeople > 0) {
        const takeTime = remainderPeople * averageTime;
        return takeTime;
    }
    else {
        return 0;
    }
}
