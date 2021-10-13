class dragonBall{

    vida : number = 100;
    patear: number=100;
    SuperSayajinBlue: number=100;  
    nombre:string= "";

    constructor (nombre:string){
        this.nombre = nombre;
    }

    public ataque(jugador: number ){
        this.patear -=10;
        this.SuperSayajinBlue-=50;
        this.estado(jugador);
    }
    public curar (jugador: number){
        this.vida += 20;
        this.patear -=10;
        this.SuperSayajinBlue-=50;
        this.estado(jugador);  
    }
    public defender (jugador:number){
        this.patear -=10;
        this.SuperSayajinBlue-=50;
        this.estado(jugador);
    }
    public revivir (jugador:number) {
        this.vida += 23;
        this.patear -=10;
        this.SuperSayajinBlue-=50;
        this.estado(jugador);
       
    }
    public recuperarEnergia (jugador:number) {
        this.vida += 20;
        this.patear -=10;
        this.SuperSayajinBlue-=50;
        this.estado(jugador);
       
    }
    public estado (jugador: number) {  
        console.log(jugador);
        console.log(this);
    }
    
}
const goku= new dragonBall('goku');
const vegeta = new dragonBall('vegeta');
