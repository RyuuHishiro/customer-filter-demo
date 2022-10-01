export interface FilterQuery {
  FunnelSteps?: FunnelStep[];
}

export interface FunnelStep {
  eventType?: string;
  eventQueries?: EventQuery[];
}

export interface EventQuery {
  eventProperty?: string;
  propertyQuery?: string;
}
