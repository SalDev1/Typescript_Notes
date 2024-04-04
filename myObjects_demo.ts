// Normal way of defining the object in javascript.
const User = {
    name: "salman",
    email : "salman@ibm.com",
    isActive: true
}

function createUser({name:String, isPaid:boolean}) {}
createUser({name:"salman", isPaid:false})

// The function returns {} , a little bit weird to be honest.
function createCourse():{name:string,price:number}{
    return {
        name:"reactjs",
        price:399,
    }
}

// Another way of passing the object to the function will be
function createUser1({name:string, isPaid:boolean}){}
let user = {name:"salman", isPaid:false, email:"h@h.com"}
createUser(user)