import { Component, OnInit } from '@angular/core';
import { FilterEventsService } from '../../services/filter-events/filter-events.service';
import { EventType } from '../../models/event-type';
import { FilterQuery } from '../../models/filter-query';

@Component({
  selector: 'app-costumer-filter.page',
  templateUrl: './costumer-filter.page.html',
  styleUrls: ['./costumer-filter.page.css'],
})
export class CostumerFilterPage implements OnInit {
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
    // TODO
  }
}
