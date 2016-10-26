/* Methods */

var rabbit = {};

rabbit.speak = function(line){
    console.log("The rabbit says '" + line + "'");
    
    
}

rabbit.speak("Im alive");


/* this */

function speak2(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");
}

var whiteRabbit = {type:"white", speak: speak2};
var fatRabbit = {type: "fat", speak: speak2};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");

fatRabbit.speak("I could sure use a carrot right now.");


/* Prototypes:

A prototype is another object that is used as a fallback source of properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on.
*/

var empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);


/* Constructors */

function Rabbit(type){
    this.type = type;
}

Rabbit.prototype.speak3 = function(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");
}

var killerRabbit = new Rabbit("Killer");
var blackRabbit = new Rabbit("black");

console.log(blackRabbit.type);
blackRabbit.speak3("Doom...");




/* Overriding derived properties */


Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);

console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

