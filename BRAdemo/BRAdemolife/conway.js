let rnd = (l,u) => Math.random() * (u-l) + l
class conway{
    constructor(x, z, seed){
        this.maporigin = [];
        this.seed = seed;
        this.cur = 0;
        for(let i = 0; i<this.seed.length; i++){
            this.cur = parseInt(this.seed.substring(i, i+1));
            this.maporigin.push(this.cur)
        }
        console.log(this.maporigin);
    }
}