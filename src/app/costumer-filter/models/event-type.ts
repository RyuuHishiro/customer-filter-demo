export interface EventType {
  type: string;
  properties: string[];
}

export interface EventTypesResponse {
  data: Events;
  success: boolean;
}

interface Events {
  events: EventType[];
}
