// We are defining the type of string[] for given arr superHeros.

// This is the one type of array syntax.
const superHeros : string[] = []
const heroPower : number[] = []

// This is the second type of array syntax.
const heroPower1 : Array<number> = []
superHeros.push("Spider-Man")
heroPower.push(2) 

// Alternative Way of declaring the array.
// It must fill the details based on the type defined for the user , 
// else it will give an error.
type User = {
    name : string,
    isActive: boolean
}

const allUsers : User[] = []

const MLModels : number[][] = [
    [255,255,255],
    []
]

allUsers.push({name:"" , isActive : false})