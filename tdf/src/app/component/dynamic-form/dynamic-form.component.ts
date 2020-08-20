import {Component, Input, OnInit} from '@angular/core';
import {CommonServiceService} from '../../service/common-service.service';
import {Section} from '../../model/common/section';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validation} from '../../model/common/validation';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  styleUrls: [],
  template: `
    <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
      <p>{{section.label}}</p>
      <div *ngFor="let field of section.fields; let i = index; let even = even">
        <div class="row" *ngIf="even">
          <div class="col-6">
            <ng-container dynamicField [field]="field" [group]="form">
            </ng-container>
          </div>
          <div class="col-6" *ngIf="section.fields[i +1]?.label">
            <ng-container dynamicField [field]="section.fields[i +1]" [group]="form">
            </ng-container>
          </div>

        </div>

      </div>
      <div class="margin-top" [formGroup]="form">
        <button type="submit" mat-raised-button color="primary">save</button>&nbsp;&nbsp;
        &nbsp;
        <button type="reset" mat-raised-button color="primary">reset</button>
        <br>
      </div>
    </form>
    {{form.value | json }}

  `,
})
export class DynamicFormComponent implements OnInit {

  @Input() section: Section;


  form: FormGroup;

  constructor(private _commonService: CommonServiceService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    //console.log(this.section);
    this.form = this.createControl();
  }


  /* createGroup = (section: Section): FormGroup => {
     const formGroup = this._formBuilder.group({});
     const field = section.fields[0];
     const control = this._formBuilder.control(field.name);
     formGroup.addControl(field.id, control);
     return formGroup;
   };*/


  createControl() {
    const group = this._formBuilder.group({});

    this.section.fields.forEach(field => {
        //
        const control = this._formBuilder.control(field.value, this.bindValidations(field.validations || []));
        group.addControl(field.name, control);

      },
    );
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

  onSubmit = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.form.value);
  };

}
