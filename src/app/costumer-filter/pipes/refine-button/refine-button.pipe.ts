import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refineButton',
})
export class RefineButtonPipe implements PipeTransform {
  transform(anyEventProperties: boolean): unknown {
    return `${anyEventProperties ? 'Refine more' : 'Add an Event attribute'}`;
  }
}
