'use strict'
// console.log("typescript is here still")
// console.log("typescript is amazing")

class User {
    // Making sure the typescript is aware of the email and name in advanced. 
    // Predefine the parameters in hand.
    email:string
    name:string
    city:string = ""
    constructor(email:string,name:string) {
        this.email = email;
        this.name = name
    }
}

const salman = new User("s@s.com","Salman")
salman.city = "Jaipur"


/*
  Understanding access modifiers.
*/

class User1 {
    // Making sure the typescript is aware of the email and name in advanced. 
    // Predefine the parameters in hand.
    public email:string
    private name:string
    readonly city: string = "Jaipur"
    constructor(email:string,name:string) {
        this.email = email;
        this.name = name
        this.city 
    }
}

const salman1 = new User1("s@s.com","Salman")
// salman1.city = "Jaipur"

// Another way of using the keywords would be.
class User2 {

    // Whenever the users register itself , then by default it registers itself with 1 course.
    protected _courseCount = 1

    readonly city : string = "Jaipur"
    constructor(
        public email: string, 
        public name : string 
    ) {
    }

    get getAppleEmail() : string {
        return `apple${this.email}`
    }

    private deleteToken() {
        console.log("Token deleted");
    }

    // If someone wants to access the courseCount.
    get courseCount():number {
        return this.courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const salman2 = new User2("s@s.com","salman")
// salman.deleteToken()


/*
   extends keyword allows you to use the concept of Inhertiance 
   where SubUser has the capability to inherit the properties / methods
   of the Parent i.e User.

   But it can't acquire the properties / methods that are private in nature. 
*/
class SubUser extends User2 {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}