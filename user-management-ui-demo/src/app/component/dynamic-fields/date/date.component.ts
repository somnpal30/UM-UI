import { Component, NgModule, OnInit } from '@angular/core';
import { Field } from '../../../model/common/field';
import { FormGroup } from '@angular/forms';
import {CommonUtils} from "../../../utility/common";

@Component({
  selector: 'app-date',
  template: `
    <label for="{{field.id}}">{{field.label}}</label>
    <br>
    <mat-form-field appearance="outline"  class="field-full-width" [formGroup]="group">
      <input matInput [matDatepicker]="picker"  id="{{field.id}}" [formControlName]="key">
      <mat-datepicker-toggle matSuffix [for]="picker">
      </mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(key).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styles: [
  ]
})

export class DateComponent implements OnInit {
  field: Field;
  group: FormGroup;
  key: string
  constructor() { }

  ngOnInit(): void {
    this.key = CommonUtils.generateControlKey(this.field)
  }

}
