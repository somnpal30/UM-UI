import { Component, Input, OnInit } from '@angular/core';
import { Panel } from '../../model/common/panel';
import { FormGroup } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-panel',
  template: `
      <!--  <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">

        </form>-->
    <!--  <form class="example-form" (submit)="onSubmit($event)"  >
        <mat-form-field class="example-full-width">
          <mat-label>Favorite food</mat-label>
          <input matInput placeholder="Ex. Pizza" value="Sushi">
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <mat-label>Leave a comment</mat-label>
          <textarea matInput placeholder="Ex. It makes me feel..."></textarea>
        </mat-form-field>
        <div class="margin-top">
          <button type="submit" mat-raised-button color="primary">save</button>&nbsp;&nbsp;
          <button type="reset" mat-raised-button color="primary">reset</button>&nbsp;&nbsp;
          <button type="button" mat-raised-button color="primary"  (click)="stepper.next()">Next</button>
        </div>

      </form>-->

  `,
  styles: [
  ]
})
export class DynamicPanelComponent implements OnInit {
  @Input() panel : Panel
  @Input() stepper : MatHorizontalStepper

  //form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log(this.stepper)
  }

  onSubmit = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();

  };
}
