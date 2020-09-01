import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {RemotedataService} from '../../service/remotedata.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MyUsersList} from '../../model/my-users-list';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-user-submission',
  templateUrl: './user-submission.component.html',
  styleUrls: ['./user-submission.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class UserSubmissionComponent implements OnInit, OnDestroy {

  options = ['All', 'Submitted', 'Saved', 'Rejected'];
  displayedColumns: string[] = ['name', 'contact_number', 'email', 'status', 'created_on'];
  displayedColumnValue: string[] = ['NAME', 'CONTACT NUMBER', 'EMAIL', 'STATUS', 'CREATED ON'];
  expandedElement: MyUsersList | null;
  subscription: Subscription;
  dataSource;

  constructor(private dataService: RemotedataService) {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.dataService.loadMyUserList().subscribe(
      resp => {
       //console.log(resp)
        this.dataSource = new MatTableDataSource<MyUsersList>(resp);
        /*  setTimeout(() => {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
           });*/
      }
    );
  }

}
