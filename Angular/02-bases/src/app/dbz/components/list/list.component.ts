import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl:"./list.component.html",
    styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[]=[{

name: "Trunks",
power:10
  }];

//onDeleteId = Index value :number
@Output()
onDelete: EventEmitter<string> = new EventEmitter();

 onDeleteCharacter(id?:string):void{
 //TODO emitit el ID del personaje
 if (!id) return

  this.onDelete.emit(id)
 }


 }
