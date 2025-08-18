// Loops
//     * for
//     * while
//     * do...while
//     👉 break
//     👉 continue


var count = 5
for (var a = 1; a <= count; a++) {
	console.log('Count: ', a)
}

var num = 99
for (var i = 1; i <= 10; i++) {
	// 9 * 2 = 18
	var result = num + ' * ' + i + ' = ' + i * num
	console.log(typeof result)
}
let i = 1
while (i <= 5) {
	console.log('count: ', i)
	i++
}

// do..while loop
let i = 5
do {
	console.log('count: ', i)
	i++
} while (i < 5)

for (let i = 1; i < 10; i++) {
	if (i === 5) {
		break
	}
	console.log(i)
}

for (let i = 1; i < 10; i++) {
	if (i === 5 || i === 8) {
		continue
	}
	console.log(i)
}

// Strings
//    * String
//    * Immutable
//    * toLowerCase, toUpperCase, trim
//    * slice, concat, includes
//    * Reverse a string

var message = 'hello'

var firstCh = message[0].toUpperCase()
var restCh = message.slice(1) // first index, last index. a + b
console.log(firstCh + restCh)

var text = 'Javascript is awesome'
console.log(text.includes('javascript')) // true/false
var sentence = 'Hello world, welcome to the universe.'
var convertSent = sentence.toLowerCase()
if (convertSent.includes('hello')) {
	console.log('Found')
} else {
	console.log('Not Found')
}

// Reverse a string
var text = 'Javascript is awesome'
var temp = ''
for (var i = 0; i < text.length; i++) {
	console.log(text[i])
	temp = text[i] + temp
}
console.log(temp)

//  Objects
//     * Properties
//     * Methods
//     * Nesting
//     * Looping
var name = 'ismail'
var person = {
	name: 'ismail', //* key : value  = properties
	age: 20,
	isStudent: true,
	address: {
		city: 'Barishal',
		country: 'Bangladesh',
	},
}

console.log(person)
console.log(person.name)

// array notation []
person['age'] = 25
console.log(person.address.country)

delete person.address
console.log(person)
for (var key in person) {
	console.log(key)
	console.log(key + ':', person[key])
}


// totalRows Row 1 - Normal Row, Row 4 - Premium Row 3/5 === 0
var totalRows = 20
for (let i = 1; i <= 50; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		console.log('Row ' + i + ' - ' + 'Premium Row 🚀')
	} else {
		console.log('Row ' + i + ' - ' + 'Normal Row')
	}
}


var details = 'this fabric is my with iron. and this is for'

if (details.includes('Cotton')) {
	console.log('Material: Cotton')
} else if (details.includes('Sale')) {
	console.log('Category: Sale Item')
} else {
	console.log('Tag: General')
}


var person01 = {
	firstName: 'Ismail',
	lastName: 'Jo',
	employeeId: 101,
	departmentCode: 'HR',
	companyName: 'Alphacorp',
}
var lastThreeCh
if (person01.lastName.length < 3) {
	lastThreeCh = person01.lastName
} else {
	lastThreeCh = person01.lastName.slice(0, 3).toLowerCase()
}

var lastThreeCh = person01.lastName.slice(0, 3).toLowerCase()
var result =
	lastThreeCh +
	person.employeeId +
	'@' +
	person01.companyName.toLowerCase() +
	'.com'
console.log(result)

function totalFine( fare ) {
    if (typeof fare !== "number" || fare <= 0){
        return "Invalid";
    }
    const twentyPercentCharge = fare * .20;
    const totalFine = fare + twentyPercentCharge + 30;
    return totalFine;
}


function  onlyCharacter( str ) {
    if (typeof str !== "string"){
        return "Invalid";
    }
    const removeSpace = str.split(" ").join("");
    const showCharacter = removeSpace.toUpperCase();
    return showCharacter;
}


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


function  isSame(arr1 , arr2 ) {
    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false){
        return "Invalid";
    }
    if (arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}


function  resultReport( marks ) {
    if(Array.isArray(marks) === false){
        return "Invalid"
    }
    let totalMarks = 0;
    let passMarks = [];
    let failMarks = [];
    for(const mark of marks){
        totalMarks = totalMarks + mark;
        if (mark >= 40){
            passMarks.push(mark);
        }
        else{
            failMarks.push(mark);
        }
    }
    const pass = passMarks.length;
    const fail = failMarks.length;
    const avgMark = totalMarks / marks.length;
    let finalScore = Math.round(avgMark);
    if (isNaN(finalScore)){
        finalScore = 0;
    }
    const outputObject = { finalScore: finalScore, pass: pass, fail: fail };
    return outputObject;
}
