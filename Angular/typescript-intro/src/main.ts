

// import "./topics/05-basic-destructuring"
// import "./topics/06-function-destructuring"
// import { ModuleNode } from "vite";
// import "./topics/07-import-export"
import "./topics/08-clases"

interface SuperHero{
name:string;
age:number;
address: Address;
showAddress: ()=>string;
}

interface Address{
  street: string;
  country: string;
  hometown: string;
}

const superHeroe: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
      street: 'Main St',
      country: 'USA',
      hometown: 'NY'
  },

  showAddress() {
      return this.name + ', ' + this.address.hometown + ', ' + this.address.country;
  }
}


const address = superHeroe.showAddress();
// console.log( address );




export {};