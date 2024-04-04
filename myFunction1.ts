
/*
  Now we do understand how defining the return type plays 
  an important role.

  After expicitly defining the return type , it will give an 
  error if not definied with a specific type.
*/
function getValue(myVal:number) : boolean{
    if(myVal > 5) {
        return true
    }
    // return "200 OK";
    return false;
} 

const getHello = (s:string):string => {
    return ""
}
const heros = ['thor','spiderman','ironman']
// const heros = [1,2,3]
heros.map((hero):string => {
    return `hero is ${hero}`
})

function consoleError(errmsg:string) : void{
    console.log(errmsg);
}

// How we are handling errors.

/*
  The never type represents values which are never observed. 
  In a return type, this means that the function throws an exception 
  or terminates execution of the program.
*/
function handleError(errmsg : string) : never{
    throw new Error(errmsg);                                                        
}