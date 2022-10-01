import { Component, Input, OnInit } from '@angular/core';
import { EventType } from '../../models/event-type';
import { EventOperations } from '../../constants/event-operations';
import { EventQuery, FunnelStep } from '../../models/filter-query';

@Component({
  selector: 'app-funnel-step',
  templateUrl: './funnel-step.component.html',
  styleUrls: ['./funnel-step.component.css'],
})
export class FunnelStepComponent implements OnInit {
  @Input() filterEvents: EventType[] = [];
  @Input() stepNumber: number = 1;

  eventType = '';
  eventProperties: string[] = [];
  queries: Record<string, string> = {};

  eventOperations = EventOperations;

  constructor() {}

  ngOnInit(): void {}

  onRefine(): void {
    this.eventProperties.push('');
  }

  setProperty(value: string, index: number): void {
    console.log(value, index);
    this.eventProperties[index] = value;
  }

  setQuery(property: string, value: any): void {
    console.log(property, value?.value);
    this.queries[property] = value?.value as string;
    console.log(this.queries);
    console.log(this.eventProperties);
  }

  getFunnelStep(): FunnelStep {
    const funnelStep: FunnelStep = {
      eventType: this.eventType,
      eventQueries: this.eventProperties.map((property) => {
        return {
          eventProperty: property,
          propertyQuery: this.queries[property],
        };
      }),
    };
    return funnelStep;
  }
}
