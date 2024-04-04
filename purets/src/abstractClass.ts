abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string,
    ) {}

    abstract getSepia() : void
    getReelTime() : number {
        return 8
    }
}

// const salman4 = new TakePhoto("portait","landspace")
class Instagram1 extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string,
        public burst: number,
    ) {
       super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("Sepia");
    }
}
const hc = new Instagram1("test","Test",3)
hc.getReelTime();