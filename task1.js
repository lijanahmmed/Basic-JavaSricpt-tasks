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

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753)); 
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));


// Output
// 1400
// 6449.400000000001
// 700
// 0
// Invalid Input
// Invalid Input