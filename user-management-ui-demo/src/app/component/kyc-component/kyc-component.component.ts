import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Section} from "../../model/common/section";

@Component({
  selector: 'kyc-component',
  templateUrl: './kyc-component.component.html',
  styleUrls: ['./kyc-component.component.css']
})
export class KycComponentComponent implements OnInit {
  panelOpenState = false;

  @Input() group: FormGroup;
  @Input() sections: Section[];
  key: string

  constructor() { }

  ngOnInit(): void {
    console.log(this.group)
  }

}
