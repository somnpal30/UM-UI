import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../service/common-service.service';
import { Panel } from '../../model/common/panel';
import { Section } from '../../model/common/section';

@Component({
  selector: 'dynamic-panel',
  template: `
    <div class="my-3 p-3 bg-white rounded shadow-sm">
        <dynamic-form *ngFor="let section of sections"[section]="section" (submit)="submit($event)"></dynamic-form>
    </div>
  `,
  styles: [
  ]
})
export class DynamicPanelComponent implements OnInit {

  panels: Panel[];
  sections: Section[];

  constructor(private _commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.loaddata();
  }

  loaddata = () => {
    this._commonService.loadComponents().subscribe(
      result => {
        this.panels = result;
        this.sections = this.panels[1].sections;
      },
      error => {
        console.error(error);
      },
    );
  };

  submit = (event) => {
    console.log(event);
  }
}
