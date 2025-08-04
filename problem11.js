/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;
for (var i = 1; i <= experience; i++){
    var fivePercent = currentSalary * 0.05;
    var currentSalary = currentSalary + fivePercent; 
}
var finalSalary = currentSalary.toFixed(2);
console.log(finalSalary);