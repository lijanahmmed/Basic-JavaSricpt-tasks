var experience = 30;
var startingSalary = 45000;
var currentSalary = startingSalary;
for (var i = 1; i <= experience; i++){
    var fivePercent = currentSalary * 0.05;
    var currentSalary = currentSalary + fivePercent; 
}
var finalSalary = currentSalary.toFixed(2);
console.log(finalSalary);

// Output
// 194487.41