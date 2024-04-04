let greetings : string = "Hello Salman";

let myNum = 6

// myNum.toLowerCase()
console.log(greetings);

// number

// This depicts that this should be a number and 
// always be a number and javascript will fetch 
// all methods that are related to the type.
let userId : number =  334455.3

// boolean.
let isLoggedIn : boolean = false

// any keyword.
// Through this example , typescript has no idea
// how to infer from a value , this is case of any been used.
// (Not a good practice).

// We should have return a string , but we are returning a boolean.
let hero;
function getHero() {
    return "thor"
}

hero = getHero()