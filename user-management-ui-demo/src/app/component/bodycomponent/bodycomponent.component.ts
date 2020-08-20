import { Component, OnInit } from '@angular/core';
import { HeaderserviceComponent } from '../../service/headerservice/headerservice.component';

@Component({
  selector: 'app-bodycomponent',
  templateUrl: './bodycomponent.component.html',
  styleUrls: ['./bodycomponent.component.css'],

})
export class BodycomponentComponent implements OnInit {
  isLinear = true;

  public panels;
  public map;

  constructor(private _headerService: HeaderserviceComponent) {
  }

  ngOnInit(): void {
    this._headerService.loadComponents().subscribe(
      result => {
        this.panels = result;
      },
      error => {
        console.log(error);
      },
    );


  }

}
