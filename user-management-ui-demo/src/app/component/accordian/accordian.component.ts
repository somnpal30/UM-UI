import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'accordian-component',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  constructor() { }

  @Input() kycInfo:string[];

  ngOnInit(): void {
  }

}
