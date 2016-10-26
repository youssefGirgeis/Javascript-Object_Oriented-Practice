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