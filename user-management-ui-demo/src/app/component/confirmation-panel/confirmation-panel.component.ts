import {Component, Input, OnInit} from '@angular/core';
import {DataserviceService} from "../../service/dataservice/dataservice.service";
import {Panel} from "../../model/common/panel";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'confirmation-panel',
  //templateUrl: './confirmation-panel.component.html',
  template: `
    sss
    <div *ngFor="let key of this.keys">
      {{key}}
    </div>
  `,
  styleUrls: ['./confirmation-panel.component.css']
})
export class ConfirmationPanelComponent implements OnInit {

  panels: Panel[];
  @Input() form: FormGroup;

  displayMap: Map<String, []>

  keys = [];

  constructor(private dataService: DataserviceService) {
  }


  ngOnInit(): void {
    //this.displayMap = this.dataService.displayData
    this.dataService.subscriber$.subscribe(data => {
      this.displayMap = data;
      console.log(this.displayMap.keys())
      this.keys = [];
      this.displayMap.forEach((v: [], k: string) => {
        console.log(k)
      })
    })
    //console.log(this.displayMap)
  }


}
