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


console.log(waitingTime([3, 5, 7, 11, 6], 10))
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 5));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6, 2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));




// Output
// 24
// 24
// 0
// Invalid Input
// 12
// Invalid Input
// Invalid Input
// Invalid Input
