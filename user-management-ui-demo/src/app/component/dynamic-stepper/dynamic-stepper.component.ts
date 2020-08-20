import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Section } from '../../model/common/section';
import { Validation } from '../../model/common/validation';
import { Panel } from '../../model/common/panel';
import { HeaderserviceComponent } from '../../service/headerservice/headerservice.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {UserInformation} from "../../model/business/userInformation";

@Component({
  selector: 'dynamic-stepper',
  template: `
    <form [formGroup]="globalFormGroup" id="form">

      <mat-horizontal-stepper [linear]="false" #stepper labelPosition="bottom">

        <mat-step *ngFor="let panel of panelList ;let i = index" label="{{panel.label}}"
                  [stepControl]="globalFormGroup.controls[panel.label]" errorMessage="Missing Mandatory Fields">
          <dynamic-form [panel]="panel" [stepper]="stepper"
                        [selectedFormGroup]="globalFormGroup.controls[panel.label]" [userInformation]="userInformation" ></dynamic-form>
        </mat-step>
      </mat-horizontal-stepper>
      <div class="margin-top">
        <button type="submit" mat-raised-button color="primary" (click)="onSubmit($event)">save</button>&nbsp;&nbsp;&nbsp;
        <!-- <button type="reset" mat-raised-button color="primary" (click)="this.globalFormGroup.reset()">reset</button>&nbsp;&nbsp;&nbsp;-->
        <button type="button" mat-raised-button color="primary" (click)="next()">next</button>&nbsp;&nbsp;&nbsp;
      </div>
    </form>
  `,
  styles: [],
  providers:[
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})

export class DynamicStepperComponent implements OnInit {
  panelList: Panel[];
  globalFormGroup: FormGroup;

  userInformation: UserInformation;

  constructor(private _formBuilder: FormBuilder, private _headerService: HeaderserviceComponent) {
  }

  ngOnInit(): void {
    this.userInformation = new UserInformation();
    this.globalFormGroup = this._formBuilder.group({});

    this._headerService.loadComponents().subscribe(
      result => {
        this.panelList = result;
        this.panelList.forEach((panel) => this.createControl(panel.sections, panel.label));
        //console.log(this.globalFormGroup.controls['step0'])
      },
      error => {
        console.log(error);
      },
    );

  }


  createControl(sections: Section[], label: string) {

    if (sections) {
      const formGroup: FormGroup = this._formBuilder.group({});
      sections.forEach(section => {
          section.fields.forEach(field => {
            const key = field.apiGroup + "-" + field.apiSection + "-"  + field.name ;
              //console.log(key)
              const control = this._formBuilder.control(field.value, this.bindValidations(field.validations || []));
              formGroup.addControl(key, control);
            },
          );
        },
      );
      this.globalFormGroup.addControl(label, formGroup);
    }

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

  next = () => {

  };
  onSubmit = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.globalFormGroup.get("Basic").value);
    //console.log(this.userInformation)
  };

}
