import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Section} from '../../model/common/section';
import {Panel} from '../../model/common/panel';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {UserInformation} from "../../model/business/userInformation";
import {CommonUtils} from "../../utility/common";
import {CommonserviceService} from "../../service/commonservice/commonservice.service";
import {DataserviceService} from "../../service/dataservice/dataservice.service";
import {EventService} from "../../service/event-service/event.service";

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
  fieldToValueMap: Map<string, string>;
  displayMap: Map<string, []>

  constructor(private _formBuilder: FormBuilder,
              private commonService: CommonserviceService,
              private dataService: DataserviceService,
              private eventService: EventService) {

  }

  ngOnInit(): void {

    this.userInformation = new UserInformation();
    this.globalFormGroup = this._formBuilder.group({});

    this.globalFormGroup.valueChanges.subscribe(selectedValue => {
      this.updateFormData(selectedValue);
    })
    this.dataService.subscriber$.subscribe(data => (this.displayMap = data))

    this.eventService.clickEventListener().subscribe(info => {
      this.addMoreKycSection(info);
    })


    this.commonService.loadSfmComponents().subscribe(
      resp => {

        this.fieldToValueMap = new Map<string, string>()
        CommonUtils.parseSfmResponse(resp, this.fieldToValueMap, "");
        this.dataService.fieldToValueMap = this.fieldToValueMap;

        this.commonService.loadComponents().subscribe(
          resp2 => {
            this.panelList = resp2;
            this.panelList.forEach((panel) => this.createControl(panel.sections, panel.label));
            this.dataService.panels = this.panelList;
          }
        )
      })

  }

  addMoreKycSection = (label: string) => {
    //console.log(this.globalFormGroup.contains(label));
    var kycForm: FormGroup = this.globalFormGroup.get(label) as FormGroup;
    //console.log(kycForm?.controls?.kycData as FormArray)
    var kycFormArray: FormArray = kycForm?.controls?.kycData as FormArray

    var tempSections: Section[];
    this.panelList?.forEach(panel => {
      if (panel.label === label) {
        tempSections = panel.sections
      }

    })


    kycFormArray?.push(this.createFormBySection(tempSections));

  }


  createControl = (sections: Section[], label: string) => {
    if (label === CommonUtils.kyc) {
      this.globalFormGroup.addControl(label, this.createFormForKycSection(sections));
    } else if (sections) {
      this.globalFormGroup.addControl(label, this.createFormBySection(sections));
    }
  }

  createFormForKycSection = (sections: Section[]): FormGroup => {
    const kycForm = this._formBuilder.group({
      kycData: new FormArray([this.createFormBySection(sections)]),
    });
    return kycForm;
  }

  createFormBySection = (sections: Section[]): FormGroup => {
    const formGroup: FormGroup = this._formBuilder.group({});
    sections.forEach(section => {
        section.fields.forEach(field => {
            const key = CommonUtils.generateControlKey(field);
            const val = this.fieldToValueMap.get(key)
            const control = this._formBuilder.control(val, CommonUtils.bindValidations(field.validations || []));
            formGroup.addControl(key, control);
          },
        );
      },
    );
    return formGroup;
  }

  onSubmit = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.globalFormGroup.value);
    //console.log(this.userInformation)
  };

  updateFormData = (formGrp: AbstractControl) => {
    this.displayMap = new Map<string, []>();
    const dataMap = new Map<string, string>()
    CommonUtils.parseObject(formGrp, dataMap);

    this.panelList.forEach(panel => {
      this.displayMap.set(panel.label, CommonUtils.prepareSection(dataMap, panel.sections))
    })
    //this.dataService.displayData = this.displayMap;
    this.dataService.updateDisplayData(this.displayMap);

    //console.log(this.displayMap)
  }


}
