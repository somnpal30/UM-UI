import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bodycomponent',
  templateUrl: './bodycomponent.component.html',
  styleUrls: ['./bodycomponent.component.css'],

})
export class BodycomponentComponent implements OnInit {
  isLinear = true;

  public panels;
  public map;

  constructor() {
  }

  ngOnInit(): void {
   }

}
