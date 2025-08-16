function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }

  if (person1.gender == person2.gender) {
    return false;
  } else if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  } else return true;
}
console.log(validProposal({ name: "Rani", gender: "female", age: 25 }, { name: "Bijoy", gender: "male", age: 30 }));


// Output
// true
