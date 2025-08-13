var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
var email = student.name.concat(student.roll).concat(".").concat(student.department).concat("@ph.ac.bd");
console.log(email);

// Output
// jhankar1014.cse@ph.ac.bd