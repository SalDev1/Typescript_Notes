interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

/*
  Whoever wants to utilize the stories feature , 
  must implements the below parameters.
*/
interface Story {
    createStory() : void
}


/*
  If Instagram wants to invoke / implement a protocol on the interface TakePhoto

  Interface focuses on telling people that a entity must have 
  some required parameters that matches with the interface parameters , or 
  when it wants inherits the properties / methods from the parent.

  Typescript is all about less errors and more consistency.
*/
class Instagram implements TakePhoto , Story{
    constructor(
        public cameraMode: string,
        public filter : string,
        public burst: number,
        public short : string,
    ) {}

    createStory() : void {
        console.log("Story was created")
    }
}

class Youtube implements TakePhoto , Story{

    constructor(
        public cameraMode : string,
        public filter : string,
        public burst: number,
        public short: string
    ) {}

    createStory(): void {
        console.log("Story was created");
    }
}