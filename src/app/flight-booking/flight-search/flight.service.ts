import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';


export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers });
  }
}

@Injectable()
export class DummyFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 1, from: 'Frankfurt', to: 'München', date: 'now', delayed: true}
    ]) as Observable<Flight[]>;
  }
}