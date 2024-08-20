import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import{v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})


export class DbzService {
  public id:number=1;
  public characters : Character[] =[{
  id:uuid(),
   name: "Krillin",
   power: 1000
  },
  {
  id:uuid(),
   name: "Goku",
   power: 9500
  },
  {
  id:uuid(),
   name: "Vegeta",
   power: 7500
  },

 ];

 addCharacter(character:Character):void{

    const newCharacter:Character = {id:uuid(), ...character}

  this.characters.unshift(newCharacter);
 }


 onDeleteCharacterById(id:string):void{
   //TODO emitit el ID del personaje
    this.characters = this.characters.filter(character => character.id !== id)
   }



}
