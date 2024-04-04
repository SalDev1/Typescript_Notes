/*
  Suppose we want a data structure that follows a very precise order 
  of data type. 

  In some coses , you want the specific thing to be pushed into the array.
  In such kind of scenario , we used tuples.
*/
// const user : (string | number)[] = [1,"hc"]
let tUser : [string,number,boolean]

tUser = ["hu",131,true]

// A classical example of tuples been used.
let rgb : [number,number,number] = [255,255,255]

type User = [number,string]
const newUser : User = [112,"example@google.com"]

newUser[1] = "hc.com"
newUser.push(1)


export {}