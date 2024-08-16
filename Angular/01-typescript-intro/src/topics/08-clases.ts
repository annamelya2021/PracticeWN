 export class Persona {
    
     constructor( 
        public name: string, 
        public apellido: string, 
        private address: string = "No Adress"
    ){}
 }


//  export class Hero extends Persona {
    
//     constructor( public alterEgo: string, 
//         public age: number,
//          public realName: string)
//          {
//         super( realName, "NY");
//     }
//  }

 export class Hero {
  
    constructor( public alterEgo: string, 
        public age: number,
         public realName: string,
         public person: Persona
        )
         {
        //  this.person = new Persona( realName);
    }
 }

 const tony = new Persona("Tony" , "Stark", "NY");
 const ironman = new Hero("Ironman",45, "Tony" , tony);



 console.log('ironman :>> ', ironman);