import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Panel} from '../../model/common/panel';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  styleUrls: [],
  template: `
    <!-- <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)" >-->
    <div *ngIf="panel.label != 'Confirmation'">
      <div *ngFor="let section of panel.sections">
        <p class="font-weight-bold">{{section.label}}</p>
        <div *ngFor="let field of section.fields; let i = index; let even = even">
          <div class="row row-bottom-margin" *ngIf="even">
            <div class="col-6">
              <ng-container dynamicField [field]="field" [group]="selectedFormGroup">
              </ng-container>
            </div>
            <div class="col-6" *ngIf="section.fields[i +1]?.label">
              <ng-container dynamicField [field]="section.fields[i +1]" [group]="selectedFormGroup">
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="panel.label === 'Confirmation'">
    <confirmation-panel [form]="form"></confirmation-panel>
    </div>
    <!-- </form>-->`,
})
export class DynamicFormComponent implements OnInit {

  @Input() panel: Panel;
  @Input() form: FormGroup;
  selectedFormGroup :any;


  constructor(private _formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.selectedFormGroup = this.form.controls[this.panel.label]
  }


}
