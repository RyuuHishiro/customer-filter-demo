import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private environmentValues = new BehaviorSubject<string>('');
  readonly api$ = this.environmentValues.asObservable();

  get environmentValue(): string {
    return this.environmentValues.getValue();
  }

  constructor(private httpClient: HttpClient) {}

  fetchEnvironments(): void {
    // this.httpClient.get<string>(``).pipe(
    of('https://customer-events.herokuapp.com')
      .pipe(tap(() => console.log('Setting up environment..')))
      .subscribe({
        next: (environmentValues) =>
          this.environmentValues.next(environmentValues),
        error: () => this.environmentValues.next('http://fallback.api}'),
      });
  }
}
