import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventType } from '../../models/event-type';
import { FilterQuery, FunnelStep } from '../../models/filter-query';
import { EventOperations } from '../../constants/event-operations';
import { EventProperty } from '../../models/event-property';

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
}
