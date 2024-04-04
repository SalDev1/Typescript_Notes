function addTwo(num:number) {
    return num + 2
}

/*
  Now there is a problem with typescript, 

  Whenever there is an inference of what should be 
  the data type , it is usually good in the case of variables.

  The idea behind the typescript is to have a stricter type so that 
  we make less mistake and fellow coders who are working with us makes 
  less mistakes.
*/
function signUpUser(name:string,email:string,isPaid: boolean) {

}
signUpUser("salman","salman@ibm.com",false)

function getUpper(val : string) {
    return val.toUpperCase()
}

addTwo(5)
getUpper('salman')

/*
  How to pass in the default vablues after defining the 
  function
*/
let loginUser = (name:string, email:string, isPaid:boolean = false) => {

}
loginUser("h","h@h.com")