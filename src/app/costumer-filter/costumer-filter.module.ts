import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentService } from './services/environment/environment.service';
import { take } from 'rxjs';
import { StepTitlePipe } from './pipes/step-title/step-title.pipe';
import { RefineButtonPipe } from './pipes/refine-button/refine-button.pipe';

@NgModule({
  declarations: [StepTitlePipe, RefineButtonPipe],
  imports: [CommonModule],
  exports: [StepTitlePipe, RefineButtonPipe],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (environmentService: EnvironmentService) => {
        environmentService.fetchEnvironments();
        return environmentService.api$.pipe(take(1));
      },
      deps: [EnvironmentService],
    },
  ],
})
export class CostumerFilterModule {}
