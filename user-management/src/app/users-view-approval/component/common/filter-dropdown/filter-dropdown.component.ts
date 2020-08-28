import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'filter-dropdown',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>
        <mat-icon>filter_alt</mat-icon>
        Filter
      </mat-label>
      <mat-select>
        <mat-option *ngFor="let option of options" value="option">{{option}}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: []
})
export class FilterDropdownComponent implements OnInit {

  constructor() {
  }

  @Input() options: string[]

  ngOnInit(): void {
  }

}
