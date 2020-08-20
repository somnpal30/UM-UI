import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Section} from '../../model/common/section';
import {Validation} from '../../model/common/validation';
import {Panel} from '../../model/common/panel';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {UserInformation} from "../../model/business/userInformation";
import {CommonUtils} from "../../utility/common";
import {CommonserviceService} from "../../service/commonservice/commonservice.service";

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

  constructor(private _formBuilder: FormBuilder, private commonserviceService: CommonserviceService) {

  }

  ngOnInit(): void {

    this.userInformation = new UserInformation();
    this.globalFormGroup = this._formBuilder.group({});


    this.commonserviceService.loadSfmComponents().subscribe(
      resp => {
        this.respMap = new Map<string, string>()
        this.parseObject(resp);
        this.commonserviceService.loadComponents().subscribe(
          resp2 => {
            this.panelList = resp2;
            this.panelList.forEach((panel) => this.createControl(panel.sections, panel.label));
          }
        )
      })

  }

  parseObject(obj) {
    for (var key in obj) {
      this.respMap.set(key, obj[key])
      //console.log("key: " + key + ", value: " + obj[key])
      if (obj[key] instanceof Object) {
        this.parseObject(obj[key]);
      }
    }
  }


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

}
