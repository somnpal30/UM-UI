import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {Section} from "../../model/common/section";
import {Field} from "../../model/common/field";
import {DataserviceService} from "../../service/dataservice/dataservice.service";
import {EventService} from "../../service/event-service/event.service";
import {CommonUtils} from "../../utility/common";

@Component({
  selector: 'kyc-component',
  templateUrl: './kyc-component.component.html',
  styleUrls: ['./kyc-component.component.css']
})
export class KycComponentComponent implements OnInit {
  panelOpenState = false;

  @Input("group") form: FormGroup;
  @Input() sections: Section[];


  counter: number = 0;
  fields: Field[];
  key: string
  kycInfo: string[];

  constructor(private eventService: EventService, private dataService: DataserviceService) {
  }

  ngOnInit(): void {
    this.dataService.fieldToLabelMap = new Map<string, string>();
    CommonUtils.mappedFieldToLabel(this.dataService.panels, this.dataService.fieldToLabelMap);
    //console.log(this.dataService.fieldToLabelMap)
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
    console.log(this.form.value)
    this.counter++
    this.kycInfo = this.convertFormValueToJson();
    this.eventService.emitClickEvent("KYC");
  }

  convertFormValueToJson = ():string[] => {
    const frmArr = this.kyc;
    var jsonColString:any = [];
    frmArr.controls.forEach(e => {
      var jsonInnerString = {}
      var frmGrp = (e as FormGroup)
      Object.keys(frmGrp.controls).forEach(f => {
        //console.log(f + " ** " + frmGrp.get(f).value)
        jsonInnerString[this.dataService.fieldToLabelMap.get(f)] = frmGrp.get(f).value;
      })
     //console.log(jsonInnerString)
      jsonColString.push(jsonInnerString)
    })
    //console.log(jsonColString)
    return jsonColString;
  }

}
