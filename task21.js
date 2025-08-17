function  onlyCharacter( str ) {
    if (typeof str !== "string"){
        return "Invalid";
    }
    const removeSpace = str.split(" ").join("");
    const showCharacter = removeSpace.toUpperCase();
    return showCharacter;
}


const character = onlyCharacter("Cy   bar- At  tac k  ");
console.log(character);


// Output
// CYBAR-ATTACK