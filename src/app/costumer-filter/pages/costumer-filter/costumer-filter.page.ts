import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FilterEventsService } from '../../services/filter-events/filter-events.service';
import { EventType } from '../../models/event-type';
import { FilterQuery, FunnelStep } from '../../models/filter-query';
import { FunnelStepComponent } from '../../components/funnel-step/funnel-step.component';

@Component({
  selector: 'app-costumer-filter.page',
  templateUrl: './costumer-filter.page.html',
  styleUrls: ['./costumer-filter.page.css'],
})
export class CostumerFilterPage implements OnInit {
  @ViewChildren(FunnelStepComponent)
  funnelStepComponents!: QueryList<FunnelStepComponent>;

  errorMessage = '';
  filterEvents: EventType[] = [];
  filterQuery: FilterQuery = { FunnelSteps: [{}] };

  constructor(private filterEventService: FilterEventsService) {}

  ngOnInit(): void {
    this.initializeFilters();
  }

  private initializeFilters(): void {
    this.filterEventService.getFilterEvents().subscribe({
      next: (filterEvents) => {
        if (!filterEvents) {
          this.errorMessage = 'Unable to load filter settings!';
        } else {
          this.filterEvents = filterEvents;
        }
      },
    });
  }

  onAddFunnelStep(): void {
    this.filterQuery.FunnelSteps?.push({});
  }

  onDiscardFilters(): void {
    this.filterQuery.FunnelSteps = [{}];
  }

  onApplyFilters(): void {
    const funnelStepsComponents = this.funnelStepComponents.toArray();
    const funnelStepsFinal: FunnelStep[] = [];
    funnelStepsComponents.forEach((funnelStep) =>
      funnelStepsFinal.push(funnelStep.getFunnelStep())
    );
    console.log(funnelStepsFinal);
  }
}
