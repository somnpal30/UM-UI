import { Component, Input, OnInit } from '@angular/core';

import { Section } from '../../model/common/section';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from '../../model/common/validation';
import { Panel } from '../../model/common/panel';
import { MatHorizontalStepper } from '@angular/material/stepper';
import {UserInformation} from "../../model/business/userInformation";

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  styleUrls: [],
  template: `
   <!-- <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)" >-->
      <div *ngFor="let section of panel.sections">
        <p class="font-weight-bold">{{section.label}}</p>
        <div *ngFor="let field of section.fields; let i = index; let even = even">
          <div class="row row-bottom-margin" *ngIf="even">
            <div class="col-6">
              <ng-container dynamicField [field]="field" [group]="selectedFormGroup">
              </ng-container>
            </div>
            <div class="col-6" *ngIf="section.fields[i +1]?.label">
              <ng-container dynamicField [field]="section.fields[i +1]" [group]="selectedFormGroup" >
              </ng-container>
            </div>
          </div>
        </div>

      </div>

   <!-- </form>-->`,
})
export class DynamicFormComponent implements OnInit {

  @Input() panel: Panel;
  @Input() stepper: MatHorizontalStepper;
  @Input() selectedFormGroup: FormGroup;


  isDisabled=false;
  constructor(private _formBuilder: FormBuilder) {  }
  form:FormGroup


  ngOnInit(): void {
    //console.log(this.selectedFormGroup)
    //this.form = this.createControl(this.panel.sections);
  }


  createControl(sections : Section[]) : FormGroup{
    const group = this._formBuilder.group({});
    if(sections){
      console.log(sections)

      sections.forEach(section => {
          section.fields.forEach(field => {
              const control = this._formBuilder.control(field.value, this.bindValidations(field.validations || []));
              group.addControl(field.name, control);
            },
          )
        }
      );
    }

   return group;
  }

  bindValidations = (validations: Validation[]) => {
    const validList = [];
    if (validations.length > 0) {
      validations.forEach(v => {

        if (v.name === 'required') {
          validList.push(Validators.required);
        } else if (v.name === 'pattern') {
          validList.push(Validators.pattern(v.validator));
        }
      });
      // console.log(validList);
    }
    return Validators.compose(validList);
  };




}
