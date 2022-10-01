import { EventProperty } from './event-property';

export interface EventType {
  type: string;
  properties: EventProperty[];
}

export interface EventTypesResponse {
  data: Events;
  success: boolean;
}

interface Events {
  events: EventType[];
}
