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