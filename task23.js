function  resultReport( marks ) {
    if(Array.isArray(marks) === false){
        return "Invalid"
    }
    let totalMarks = 0;
    let passMarks = [];
    let failMarks = [];
    for(const mark of marks){
        totalMarks = totalMarks + mark;
        if (mark >= 40){
            passMarks.push(mark);
        }
        else{
            failMarks.push(mark);
        }
    }
    const pass = passMarks.length;
    const fail = failMarks.length;
    const avgMark = totalMarks / marks.length;
    let finalScore = Math.round(avgMark);
    if (isNaN(finalScore)){
        finalScore = 0;
    }
    const outputObject = { finalScore: finalScore, pass: pass, fail: fail };
    return outputObject;
}


const marksArray = resultReport([98, 87, 67, 91, 92, 33, 87]);
console.log(marksArray);


// Output
// { finalScore: 79, pass: 6, fail: 1 }