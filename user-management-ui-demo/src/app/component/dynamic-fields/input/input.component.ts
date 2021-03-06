import {Component, OnInit} from '@angular/core';
import {Field} from '../../../model/common/field';
import {FormGroup} from '@angular/forms';
import {CommonUtils} from "../../../utility/common";

@Component({
  selector: 'app-input',
  template: `
    <div class="field-full-width">
      <label for="{{field.id}}">{{field.label}}</label>
      <mat-form-field appearance="outline" class="field-full-width" [formGroup]="group">
        <input matInput class="field-fixed-height" name="{{field.name}}" id="{{field.id}}" [formControlName]="key">
        <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
          <mat-error
            *ngIf="group.get(key)?.hasError(validation.name)">{{validation.message}}</mat-error>
        </ng-container>
      </mat-form-field>
    </div>
  `,
  styles: [],
})
export class InputComponent implements OnInit {
  field: Field;
  group: FormGroup;
  key: string

  constructor() {
  }

  ngOnInit(): void {
    this.key = CommonUtils.generateControlKey(this.field)
  }

}
