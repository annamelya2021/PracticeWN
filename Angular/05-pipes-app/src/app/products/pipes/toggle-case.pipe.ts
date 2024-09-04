import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {
    return value.toUpperCase();
  }

}

