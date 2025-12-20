class timer{
    constructor(){
        this.song = ["1L1R1L2R"]
        this.songtime = 0;
        this.s = 0;
    }
    timering(){
        if(this.song[this.songtime*2]=="1L"){
            console.log("YEAH");
        }
        this.s+=.25;
        if(this.s%.5 == 0){
            console.log("another half second passes");
        }
        if(this.s%1 == 0){
            console.log("another second passes");
        }
        console.log(this.s);
    }
}