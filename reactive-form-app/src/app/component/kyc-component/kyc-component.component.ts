import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kyc-component',
  templateUrl: './kyc-component.component.html',
  styleUrls: ['./kyc-component.component.css']
})
export class KycComponentComponent implements OnInit {

  myForm: FormGroup;
  counter:number = -1;

  constructor(private formBuilder: FormBuilder) {
  }

  get frm() { return this.myForm.controls; }

  get kyc() { return this.frm.kycData as FormArray; }

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
       kycData : new FormArray([]),
    });

    this.createDynamicFormGroup();

  }

  createDynamicFormGroup = () => {
    this.counter++
    this.kyc.push(
      this.formBuilder.group({
        kycType: this.formBuilder.control('PASSPORT'),
        kycValue: this.formBuilder.control(''),
        kycIssued: this.formBuilder.control(''),
        kycValidFrom: this.formBuilder.control(''),
        kycValidTo: this.formBuilder.control(''),
      }))
  }

  add = () => {
    this.createDynamicFormGroup()
  };

}
