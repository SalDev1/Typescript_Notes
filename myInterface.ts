interface User {
    readonly dbId: number,  // It allows you to only read the file, not to modify it.
    email : string,
    userId : number,
    googleId? : string,

    // startTrail: () => string  // 1st way of defining a method / function.
    startTrail(): string   // 2nd way of defining a method / function.
    getCoupon(couponname: string , value : number) : number
}

interface User {
    githubToken: string,
}

// interface allows to inhert properties from other classes too.
interface Admin1 extends User {
    role: "admin" | "ta" | "learner"
}


const hitesh : User = {
    dbId : 22,
    githubToken : "github",
    email : "h@h.com", 
    userId:2211,
    startTrail : () => {
        return "trail started"
    },
    getCoupon: (name:"hitesh10",off:1) => {
        return 10
    }
}