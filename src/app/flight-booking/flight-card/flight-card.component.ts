import { Component, OnInit, Input, EventEmitter, Output, OnChanges, OnDestroy } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit() {
    console.debug('init', this.selected, this.item);

    setTimeout(() => this.selectedChange.next(true), 0);

  }

  ngOnChanges(changes) {
    console.debug('changes', this.selected, this.item);
    console.debug('changes details:', changes);
  }

  ngOnDestroy() {
    console.debug('destroy', this.selected, this.item);
  }

  select(): void {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.next(false);
  }

}
