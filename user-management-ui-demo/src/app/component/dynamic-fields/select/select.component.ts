import { Component, OnInit } from '@angular/core';
import { Field } from '../../../model/common/field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
    <label>{{field.label}}</label>
    <br>
    <mat-form-field class="field-full-width margin-top" [formGroup]="group" appearance="outline">
      <mat-select [formControlName]="field.name" value="field.value">
        <mat-option *ngFor="let option of field.options" [value]="option.key">{{ option.value }}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class SelectComponent implements OnInit {
  field: Field;
  group: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    //console.log(this.field);
  }

}
