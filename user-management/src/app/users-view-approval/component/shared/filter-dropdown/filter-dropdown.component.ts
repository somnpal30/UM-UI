import {Component, Input, OnInit} from '@angular/core';
import {EventStoreService} from '../../../service/event-store.service';

@Component({
  selector: 'filter-dropdown',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>
        <mat-icon>filter_alt</mat-icon>
        Filter
      </mat-label>
      <mat-select (selectionChange)="changeValue($event)">
        <mat-option *ngFor="let option of options" value="{{option}}">{{option}}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: []
})
export class FilterDropdownComponent implements OnInit {

  constructor(private eventStoreService: EventStoreService) {
  }

  @Input() options: string[]

  ngOnInit(): void {
  }

  changeValue = (event) => {
    //console.log(event.value)
    this.eventStoreService.emitClickEvent(event.value);
  }

}
