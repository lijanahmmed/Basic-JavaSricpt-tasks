function cashOut(money) {
  if (money < 0 || typeof money != "number") {
    return "Invalid";
  }
  let charge = money * (1.75 / 100);
  let fixedCharge = charge.toFixed(4);
  let finalCharge = parseFloat(fixedCharge);
  return finalCharge;
}
console.log(cashOut(4500));


// Output
// 78.75