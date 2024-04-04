const score : Array<number> = []
const names : Array<string> = []

/*
  This function takes in either a boolean or number and will 
  return either a boolean or number.
*/
function identityOne(val:boolean | number) : boolean | number {
    return val;
}

/*
  Typescript has no ideas , what could be the value 
  as we have define the type any.
  
  Eg :- Take number as an input , return as a string.
*/
function identityTwo(val:any) : any {
    return val
}

/*
  Type is almost similar to any.
  Once you passed in a specific type , it is been locked by typescript
  by the given syntax.
  Eg :- If the type of input is a number , it automatically sets the return 
  type as number too.
*/
function identityThree<Type>(val : Type) : Type {
    return val
}
identityThree("3")

/*
  Common Syntax to be seen by developers.
  Advantage of the below code is that it allows you to pass your 
  own type.
*/
function identityFour<T>(val: T) : T {
    return val;
}
interface Bottle {
    brand : string,
    type : number,
}

// identityFour<Bottle>({})

/*
  The return type will be one of the values of the T array.
*/
function getSearchProducts<T>(products : T[]) : T {
  // do some database operations.
  const myIndex = 3
  return products[myIndex]
}

/*
  This is how we apply generics to the
  arrow function.

  , --> it represents that it is not a JSX syntax but rather 
  a syntax for generics.
*/
const getMoreSearchProducts = <T,>(products : T[]) : T => {
   const myIndex = 4
   return products[myIndex]
}

/*
  Understanding Type Parameters in Generic Constants.

  You can provide n number of types , when defining a generic 
  of the function.

  When we used the extend keyword ,it gives us a problem , U can only
  accept input of number type and rejecting every other type.

  extend --> A keyword helps you specify a defined type.
*/
interface Database {
  connection:string,
  username:string,
  password:string
}

function anotherFunction<T, U extends Database>(valone:T, valtwo:U): object {
   return {
      valone,
      valtwo
   }
}

// anotherFunction(3,{})

// Understanding Generic Classes. 
interface Quiz {
  name:string,
  type:string
}

interface Course{
  name:string,
  author:string,
  subject:string,
}

/*
  We need to define a generic class where it can handle some of the 
  common cases.
  It help you write bigger cases for bigger problems in the future.
*/
class Sellable<T>{
  // We are defining an cart array of T[].
  public cart: T[] = []

  addToCart(product: T) {
    this.cart.push(product)
  }
}