function totalFine( fare ) {
    if (typeof fare !== "number" || fare <= 0){
        return "Invalid";
    }
    const twentyPercentCharge = fare * .20;
    const totalFine = fare + twentyPercentCharge + 30;
    return totalFine;
}


const Fine = totalFine(200);
console.log(Fine);


// Output
// 270
