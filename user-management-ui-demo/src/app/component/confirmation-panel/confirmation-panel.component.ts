import {Component, Input, OnInit} from '@angular/core';
import {DataserviceService} from "../../service/dataservice/dataservice.service";
import {Panel} from "../../model/common/panel";
import {AbstractControl, FormGroup} from "@angular/forms";
import {Section} from "../../model/common/section";
import {Field} from "../../model/common/field";
import {CommonUtils} from "../../utility/common";

@Component({
  selector: 'confirmation-panel',
  templateUrl: './confirmation-panel.component.html',
  styleUrls: ['./confirmation-panel.component.css']
})
export class ConfirmationPanelComponent implements OnInit {

  panels: Panel[];
  @Input() form: FormGroup;

  displayMap: Map<String, []>

  constructor(private dataService: DataserviceService) {
  }


  ngOnInit(): void {
    this.displayMap = this.dataService.displayData
    console.log(this.displayMap)
  }

/*  prepareSection(formGroup: AbstractControl, sections: Section[]): any {
    const values: any[] = [];
    if (sections) {
      sections.forEach(section => {
        values.push(this.prepareField(formGroup, section.fields))
      })
    }

    return values;
  }

  prepareField = (formGroup: AbstractControl, fields: Field[]): any => {
    const values: any[] = [];
    fields.forEach(field => {
      const key = CommonUtils.generateControlKey(field);
      const control = formGroup.get(key);
     // console.log(control);

      const value = control.value;
      const tuple = [field.label, value]
      values.push(tuple);
    })
    return values;

  }*/


}
