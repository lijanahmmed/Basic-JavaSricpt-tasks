/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var email = student.name.concat(student.roll).concat(".").concat(student.department).concat("@ph.ac.bd");
console.log(email);