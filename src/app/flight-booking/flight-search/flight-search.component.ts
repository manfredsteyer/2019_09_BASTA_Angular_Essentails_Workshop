import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService, DummyFlightService } from './flight.service';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    // { provide: FlightService, useClass: DummyFlightService }
  ]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "5": true
  };

  // private http: HttpClient;

  constructor(private flightService: FlightService) {
  }

  ngOnInit() { // "OnLoad"
  }

  search(): void {
    // this.flights = [
    //   { id: 1, from: 'Graz', to: 'Frankfurt', date: '2019-09-23T18:00+02:00', delayed: true },
    //   { id: 2, from: 'Frankfurt', to: 'Flagranti', date: '2019-09-23T19:00+02:00', delayed: true },
    //   { id: 3, from: 'Frankfurt', to: 'Kognito', date: '2019-09-23T20:00+02:00', delayed: true },
    //   { id: 4, from: 'Frankfurt', to: 'Mallorca', date: '2019-09-23T18:00+02:00', delayed: true }
    // ];
    this.flightService.find(this.from, this.to).subscribe(
      flights => { this.flights = flights; },
      err => console.error('err', err)
    );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
