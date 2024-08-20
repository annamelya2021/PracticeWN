import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzSevice: DbzService){

  }
  get characters(): Character[] {
    return [...this.dbzSevice.characters];
     }

     onDeleteCharacter(id:string):void{
     this.dbzSevice.onDeleteCharacterById(id)
     }
     onNewCharacter(character: Character):void{
      this.dbzSevice.addCharacter( character)
     }
}

