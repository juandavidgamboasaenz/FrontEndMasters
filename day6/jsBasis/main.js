const monthlyRent = 500;
let anualRent = monthlyRent * 12;

//concatena salidas en console log con ","

console.log(monthlyRent, anualRent);
anualRent = 1;
console.log(anualRent);

//Variable String
const firstName = "Brian ";
const lastName = "Holt" ;

//Se utiliza "`" en vez de comillas dobles "" para facilitar la sintaxis
var sentence =  `Hello ${firstName} ${lastName} How are you?`;

console.log(sentence);

//boolean variables
const isTheSkyBlue = true;
console.log(isTheSkyBlue);

//
const num = 5;
const num1 = 5.00001;
const num2 = -5.00001;

console.log(num + num1);


//Operaciones logicas
const isSkyBlue = false;
let greeting;

if (isSkyBlue){
    console.log("The sky is blue");
    console.log('lol');
    greeting = 'It must be nice weather'; 
} else {
    console.log("The sky is ....not blue ?");
    
    greeting = 'It must not be nice weather'; 
}

// === verifica si lo que esta entre parentesis verifica si el tipo de variable y lo que esta dentro es igual
if( 2 + 2 == "4"){
    console.log("yay! maths works");
} else {
    console.log("wtf");
}

let friendsAtYourParty = 3;
if (friendsAtYourParty === 0){
    console.log("Cool, now i have all the nachos to myself")
} else if(friendsAtYourParty <= 4){
    console.log("now we can play mario kart")
}
else {
    console.log("Wooooo, play the dance music")
}

// loops

let friendsAtYourParty2 = 0;
//while loop

while(friendsAtYourParty2 <69 ) {
    //console.log(friendsAtYourParty2);
    //friendsAtYourParty2 = friendsAtYourParty2 + 1;
    //friendsAtYourParty2 += 1;
    friendsAtYourParty2 ++;
    //++friendsAtYourParty2;
}

//for loop
console.log(friendsAtYourParty2);
friendsAtYourParty2 = 0;

for(let i = 0; i < 10; i++){
    friendsAtYourParty2++;
}

console.log(friendsAtYourParty2);

/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/


const character = 'f';
const timesToRepeat = 5;
let mySring = 's';
let answer = '';

for (let i = 0; i < timesToRepeat ; i++){
  answer += character;
}

console.log(answer);

var v = 1;
var f1 = function(){
    console.log(v);

}

var f2 = function(){
    var v = 2;
    f1();
}

f2();

function addTwo(number){
    return number + 2;
}

function giveBackFive(){
    return 5;
}

console.log(giveBackFive());

function add(num1, num2){
    return num1 + num2;
}

console.log(giveBackFive());

const finalAnswer = addTwo(5);
const finalAnswer2 = addTwo(10);
const finalAnswer3 = add(5, 10);
console.log(finalAnswer);
console.log(finalAnswer2);
console.log(finalAnswer3);

function greet(firstName, lastName, honorific, greeting){
    return `${greeting} ${honorific} ${lastName}! Estoy extremadamente complacido de que te nos unas el día de hoy, ${firstName}! Espero que disfrutes tu estadia, ${honorific} ${lastName}.`;
}

console.log(greet("David", "Gamboa", "cñor", "Holi"));
console.log(greet("Jack", "Sparrow", "Capitan", "A-Hoy"));

const myHomeCity = "Bogotá D.C.";
const myHomeState = "Cundinamarca";
const myHomeCountry = "Colombia";

function logOutYourHome(city, state, country){
    console.log(`Eres de ${city}, ${state}, ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);

function addFive(number){
    const someVariable = "No me puedes ver fuera de esta función";

    console.log(anotherVariable);
    return number + 5;
}

if( true ){
    const yetSomeOtherVariable = 'only in scope for the if statemente';
    console.log(yetSomeOtherVariable);
}

const anotherVariable = 'something else';
addFive(10);
//console.log(someVariable);

friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++){
    console.log(i);
    friendsAtYourParty++;

}

const A = 'A';
let F;

function doStuff(B){
    console.log(B);
    const C = "C";
    let H = "H";
    if (1 + 1 === 2){
        const D = "D";
        H = "something else";
    }
    console.log(D);
    console.log(H);
    F = "F";
}

let E = 0;
while( E < 3){
    E ++;
    console.log(A);
    const G = "G";
}

//console.log(E);
//console.log(G);

//doStuff("B");
//console.log(B);
//console.log(C);
console.log(F);

let something = 'outside the function'

function thing(){
    
    let something = 'outside the if statement';

    if(true){
        let something = 'inside the if statement';
        console.log(something);   
    }
    console.log(something);   

}

thing();
console.log(something);

//Builtins

sentence = "eSTo tIenE uN CaSiNg dE mIeRda";
console.log(sentence);
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

console.log(Math.round(5.1));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.1));
console.log(Math.min(5.1, 1, 100, .5));
console.log(Math.max(5.1, 1, 100, .5));

const name = "David Gamboa";
console.log(name.substr(6, 3));
console.log(name.substr(4));
console.log(name.substr(1, 3));

//Objects and Arrays 

const person = {
    name: "David",
    lastName: "Gamboa",
    state: "Cundinamarca",
    favoriteFood: "Fideos",
    wantsFideosRigthNow: true,
    numberOfFideosWanted: 100
};

console.log(person);
console.log(person.name);
console.log(person["name"]);

const person1 = {
    name: "Brian", 
    ageRange: "25-35"
};

const person2 = {
    name: "Jack",
    ageRange: "65"
};


//Object

function suggestMusic(person){
    if(person.ageRange==="25-35"){
        console.log("We think you'll like Daft Punk crazy millenial");
    } else if( person.ageRange==="65-75"){
        console.log("You're obviosly going to like Johny Cash. He walks the line");
    } else  {
        console.log("Uh, maybe try David Bowie? everyone lokes David Bowie");
    }
}

suggestMusic(person1);
suggestMusic(person2);

//Method

const dog = {
    name: "dog",

    //Tambien puedes escribir     speak: function(){

    speak(someParameter){
    console.log("woof woof", someParameter);
    }
};

dog.speak('lol');

//Object

const me = {

    nameMe: {
        first: "David",
        last: "Gamboa"
    },
 
    location: {
        city: "Bogotá D.C",
        state: "Cundinamarca",
        country: "Colombia"
    }
};

console.log(me);
console.log(me.nameMe.first);

//context 

const me2 = {

    name: {
        first: "David",
        last: "Gamboa",
        logMeOut() { console.log(this) }
    },

    location: {
        calleNumber: "7A",
        carreraNumber: "69C",
        city: "Bogotá D.C.",
        state: "Cundinamarca",
        zipCode: 110831,
        country: "Colombia"
    },
//this. en este contexto representa el objeto en el que nos encontramos: me2
    getAddress(){
        return `${this.name.first} ${this.name.last} ${this.location.calleNumber} ${this.location.carreraNumber} ${this.location.state} ${this.location.zipCode} ${this.location.country}`;
    }
};

console.log(me2.getAddress());
console.log(me2.name.logMeOut());

me2.name.first = 'Niki'

console.log(this === window);
console.log(this.scrollY);
console.log(window.scrollY);