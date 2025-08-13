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

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("li2jan"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("e1mu3"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(12));
console.log(checkDigitsInName(["raj"]));


// Output
// true
// true
// false
// true
// false
// Invalid Input
// Invalid Input