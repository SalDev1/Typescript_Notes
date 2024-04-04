/*
  Suppose you are using MongoDB to save this User1 in the 
database.
*/
type User1 = {
    readonly _id:string
    name:string
    email:string
    isActive: boolean

    // We are passing this parameter as optional for all users coming in.
    credentials ?: number
}

let myUser : User1 = {
    _id : "1245",
    name: "s",
    email:"s@s.com",
    isActive:  false
}

myUser.email = "s@s.com"
// myUser._id = "123"
type cardNumber = {
    cardNumber: string
}
// & is for combining all types together.
type cardDetails = cardNumber & cardDate & {
    cvv:number
} 

type cardDate = {
    cardDate : string
}

