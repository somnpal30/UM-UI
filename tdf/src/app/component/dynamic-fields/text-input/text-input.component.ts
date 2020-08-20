import { Component, OnInit } from '@angular/core';
import { Field } from '../../../model/common/field';
import { FormGroup } from '@angular/forms';

@Component({

  selector: 'text-input',
  template: `
    <div>
      <label for="{{field.id}}">{{field.label}}</label>
      <mat-form-field appearance="outline" class="field-full-width" [formGroup]="group">
        <input matInput class="field-fixed-height" name="{{field.name}}" id="{{field.id}}"
               [formControlName]="field.name">
        <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
          <mat-error
            *ngIf="group.get(field.name).hasError(validation.name) && group.get(field.name).touched">{{validation.message}}</mat-error>
        </ng-container>
      </mat-form-field>
    </div>
  `,
  styles: [],
})
export class TextInputComponent implements OnInit {
  field: Field;
  group: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    //console.log(this.field.name)
    //this.validate();
  }

  /*validate = () => {
    console.log("***********" + this.group.get(this.field.name).hasError("required"))

  }*/

}
