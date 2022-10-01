import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stepTitle',
})
export class StepTitlePipe implements PipeTransform {
  transform(stepNumber: number, name: string): unknown {
    return `${stepNumber}. Step: ${name ? name : 'Unnamed step'}`;
  }
}
