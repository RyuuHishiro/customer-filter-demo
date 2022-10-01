import { EventType } from './event-type';
import { EventProperty } from './event-property';

export interface FilterQuery {
  FunnelSteps?: FunnelStep[];
}

export interface FunnelStep {
  eventType?: EventType;
  eventQueries?: EventQuery[];
}

export interface EventQuery {
  eventProperty?: EventProperty;
  propertyQuery?: string;
}
