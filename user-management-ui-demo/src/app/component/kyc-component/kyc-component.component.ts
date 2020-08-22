import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {Section} from "../../model/common/section";
import {Field} from "../../model/common/field";
import {DataserviceService} from "../../service/dataservice/dataservice.service";
import {EventService} from "../../service/event-service/event.service";

@Component({
  selector: 'kyc-component',
  templateUrl: './kyc-component.component.html',
  styleUrls: ['./kyc-component.component.css']
})
export class KycComponentComponent implements OnInit {
  panelOpenState = false;

  @Input("group") form: FormGroup;
  @Input() sections: Section[];


  counter:number = 0;
  fields: Field[];
  key: string

  constructor(private eventService : EventService) {
  }

  ngOnInit(): void {
    //console.log(this.form)
    this.sections.forEach(section => {
      //console.log(section)
      this.fields = section.fields;
    })
  }



  get frm() {
    return this.form.controls;
  }

  get kyc() {
    return this.frm.kycData as FormArray;
  }

  add = () => {
    this.counter++
    this.eventService.emitClickEvent("KYC");
  }

}
