import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-user-submission',
  templateUrl: './user-submission.component.html',
  styleUrls: ['./user-submission.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserSubmissionComponent implements OnInit {

  options = [['All','All'],['Submitted','Submitted'],['Saved','Saved'],['Reject','Reject']]

  constructor() { }

  ngOnInit(): void {
  }

}
