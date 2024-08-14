 export class Persona {
     public name?: string;
     public address?: string;

     constructor(){

        this.name ="Anna",
        this.address = "Bilbao";
     }
 }

 const ironman = new Persona();

 console.log('ironman :>> ', ironman);