function  bestTeam( player1, player2 ) {
    if (typeof player1 !== "object" || typeof player2 !== "object"){
        return "Invalid";
    }
    const fareTeam1 = player1.foul + player1.cardY + player1.cardR;
    const fareTeam2 = player2.foul + player2.cardY + player2.cardR;
    if (fareTeam1 === fareTeam2){
        return "Tie";
    }
    else if(fareTeam1 > fareTeam2){
        return player2.name;
    }
    else if (fareTeam1 < fareTeam2){
        return player1.name;
    }
}


const team = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 });
console.log(team);


// Output
// Germany