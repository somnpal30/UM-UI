import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Section} from "../../model/common/section";
import {Field} from "../../model/common/field";

@Component({
  selector: 'kyc-component',
 /* templateUrl: './kyc-component.component.html',*/
  template: `
   <div class="row-4">
     <button mat-mini-fab color="accent" aria-label="Example icon button with a plus one icon">
       <mat-icon>plus_one</mat-icon>
     </button>
   </div>
  `,
  styleUrls: ['./kyc-component.component.css']
})
export class KycComponentComponent implements OnInit {
  panelOpenState = false;

  @Input() group: FormGroup;
  @Input() sections: Section[];

  fields: Field[] ;
  key: string

  constructor() {
  }

  ngOnInit(): void {
    //console.log(this.group)
    this.sections.forEach(section => {
      console.log(section)
      this.fields = section.fields;
    })
  }

}
