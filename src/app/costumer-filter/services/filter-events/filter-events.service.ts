import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventType, EventTypesResponse } from '../../models/event-type';
import { map, Observable } from 'rxjs';
import { EnvironmentService } from '../environment/environment.service';

@Injectable({
  providedIn: 'root',
})
export class FilterEventsService {
  constructor(
    private httpClient: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  getFilterEvents(): Observable<EventType[] | null> {
    return this.httpClient
      .get<EventTypesResponse>(this.environmentService.environmentValue)
      .pipe(
        map((eventTypesResponse: EventTypesResponse) =>
          eventTypesResponse.success ? eventTypesResponse.data.events : null
        )
      );
  }
}
