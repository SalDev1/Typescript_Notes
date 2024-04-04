let score: number | string = 33

score = 44
score = "55"

type User2 = {
    name:string,
    id:number 
}
type Admin = {
    username : string;
    id : number
}
let salman : User2 | Admin = {name:"salman", id:334}
salman = {username:"hc",id:334}

getDbId(3)
getDbId("3")

/*
  In this case , id could be a number or string.
  So we must understand what is the best practice to handle such situations.
*/
function getDbId(id:number | string) {
    // making some API calls.
    // console.log(`DB id is: ${id}`);
    if(typeof id === "string") {
        id.toLowerCase()
    }

}
// Handling Union with the array.
const data : number[] = [1,2,3]
const data2 : string[] = ["1","2","3"]

/*
  The understanding of typescript over here is 
   1) Store all the number of type number only.
   OR
   2) Store all the number of type string only.
*/
const data3 : string[] | number[] = ["1","2","3"]

/*
  But there is a fix where you can allow multiple types to
  be stored in the same array.
*/
const data4 : (string | number | boolean)[] = ["1","2", 3,true]

/*
  Allowing some variables to be very strict.
*/
let pi:3.14 = 3.14

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment="aisle"
// seatAllotment= "crew"