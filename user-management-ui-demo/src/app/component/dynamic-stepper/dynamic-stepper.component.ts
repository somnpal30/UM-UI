import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Section} from '../../model/common/section';
import {Validation} from '../../model/common/validation';
import {Panel} from '../../model/common/panel';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {UserInformation} from "../../model/business/userInformation";
import {CommonUtils} from "../../utility/common";
import {CommonserviceService} from "../../service/commonservice/commonservice.service";
import {DataserviceService} from "../../service/dataservice/dataservice.service";
import {Field} from "../../model/common/field";

@Component({
  selector: 'dynamic-stepper',
  templateUrl: 'dynamic-stepper.component.html',
  styles: [],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true}
    }
  ]
})

export class DynamicStepperComponent implements OnInit {
  panelList: Panel[];
  globalFormGroup: FormGroup;

  userInformation: UserInformation;
  respMap: Map<string, string>;
  displayMap: Map<string, []>

  constructor(private _formBuilder: FormBuilder,
              private commonService: CommonserviceService,
              private dataService: DataserviceService) {

  }

  ngOnInit(): void {

    this.userInformation = new UserInformation();
    this.globalFormGroup = this._formBuilder.group({});

    this.globalFormGroup.valueChanges.subscribe(selectedValue => {
      this.updateFormData(selectedValue);
    })
    this.dataService.subscriber$.subscribe(data => (this.displayMap = data))

    this.commonService.loadSfmComponents().subscribe(
      resp => {
        this.respMap = new Map<string, string>()
        CommonUtils.parseSfmResponse(resp, this.respMap,"");
        this.commonService.loadComponents().subscribe(
          resp2 => {
            this.panelList = resp2;
            this.panelList.forEach((panel) => this.createControl(panel.sections, panel.label));
            this.dataService.panels = this.panelList;
          }
        )
      })

  }

  parseObject(obj, map: Map<string, string>) {
    for (var key in obj) {
      map.set(key, obj[key])
      //console.log("key: " + key + ", value: " + obj[key])
      if (obj[key] instanceof Object) {
        this.parseObject(obj[key], map);
      }
    }
  }

/*  parseSfmResponse(obj, map: Map<string, string>, mapKey:string){

    for (var key in obj) {
      if (obj[key] instanceof Object) {
        const localkey = mapKey + key + "-"
        //console.log(localkey)
        this.parseSfmResponse(obj[key], map,localkey)
      }else {
        const tempMapKey = mapKey+ key;
        map.set(tempMapKey, obj[key])
      }
    }

  }*/



  createControl(sections: Section[], label: string) {

    if (sections) {
      const formGroup: FormGroup = this._formBuilder.group({});
      sections.forEach(section => {
          section.fields.forEach(field => {
              const key = CommonUtils.generateControlKey(field);
              const val = this.respMap.get(key)
              const control = this._formBuilder.control(val, this.bindValidations(field.validations || []));
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
    console.log(this.globalFormGroup.value);
    //console.log(this.userInformation)
  };

  updateFormData = (formGrp: AbstractControl) => {
    this.displayMap = new Map<string,[]>();
    const dataMap = new Map<string, string>()
    this.parseObject(formGrp, dataMap);

    this.panelList.forEach( panel => {  this.displayMap.set(panel.label, this.prepareSection(dataMap, panel.sections)) })

    //this.dataService.displayData = this.displayMap;
    this.dataService.updateDisplayData(this.displayMap);

    //console.log(this.displayMap)
  }

  prepareSection(formValueMap: Map<string, string>, sections: Section[]): any {
    const values: any[] = [];
    if (sections) {
      sections.forEach(section => {
        values.push(this.prepareField(formValueMap, section.fields))
      })
    }

    return values;
  }

  prepareField = (formValueMap: Map<string, string>, fields: Field[]): any => {
    const values: any[] = [];
    fields.forEach(field => {
      const key = CommonUtils.generateControlKey(field);
      const value = formValueMap.get(key);
      const tuple = [field.label, value]
      values.push(tuple);
    })
    return values;

  }



}
