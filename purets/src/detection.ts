/*
  Understanding Type Narrowing with an example.
*/
function detectType(val: number | string) {
   if(typeof val === "string") {
     return val.toLowerCase()
   }
   return val + 3
}

/*
  There are some cases , where we might not receive the id 
  , so in such cases , we return null.
*/
function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

/*
  Let's understand this concept with an another example.

  The main idea behind understanding the concept is using 
  type of keyword to determine the specific type and applying the 
  logic according to it.
*/
 function printAll(strs:string| string[] | null) {
    if(strs) {
        if(typeof strs === "object") {
            for(const s of strs) {
                console.log(s);
            }
        } else if(typeof strs === "string") {
            console.log(strs);
        }
    }
 } 

 /*
   The below code snippet helps us understand the 
   in-operator narrowing.

   Where in the given example, in the defined function isAdmin 
   we check if "isAdmin" property / key exists in the type User or Admin.

   If yes , return the value assigned to the property.
 */
 interface User {
    name :string,
    email:string,
 }

 interface Admin {
    name: string,
    email: string,
    isAdmin: boolean,
 }

 function isAdminAccount(account: User| Admin) {
    if("isAdmin" in account) {
        return account.isAdmin
    }
 }

 /*
    instance-of narrowing.
 */
function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}

/*
  type predicate narrowing.

  We define the method which is going to validate if the input 
  value given is a Fish or not.
*/
type Fish = {
    swim : () => void
}
type Bird = {
    fly : () => void
}

// If we received the input as fish + if it is swims and it is not undefined ,
// then it is a fish

/*
  The below function is returning a Booelan , instead of returning the type of 
  fish or bird.

  Instead of returning the boolean by default , use the syntax 
  pet is fish (kind of type predicate / typecasting it for a particular type)
*/
function isFish(pet: Fish | Bird) : pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    // If the pet is actually a fish , provide fish food. 
    // otherwise , bird food.
    if(isFish(pet)) {
        pet
        return "fish food"
    } 
    else {
        pet
        return "bird food"
    }
}

/*
  Discriminated Unions.
*/
interface Circle {
    kind : "circle"
    radius : number
}
interface Square {
    kind : "square"
    side : number
}
interface Rectangle {
    kind : 'rectangle'
    length : number,
    width : number
}

type Shape = Circle | Square | Rectangle
function getTrueShape(shape : Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

/*
  Never Type Exhaustive Check is understood with the below example.

  We use this concept as the precautionary step for making sure that your
  code is future proof.

  For that we have a solution , where we define a default case which 
  should be of type never on whatever the shape you are defining and you should
  return that.

  This is known as never type.
*/
function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle" :
            return shape.length * shape.width
        default :
           const _defaultforshape : never = shape
           return _defaultforshape
    }
}