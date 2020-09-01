import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {RemotedataService} from '../../service/remotedata.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MyUsersList} from '../../model/my-users-list';

@Component({
  selector: 'app-user-submission',
  templateUrl: './user-submission.component.html',
  styleUrls: ['./user-submission.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserSubmissionComponent implements OnInit, OnDestroy {

  options = ['All', 'Submitted', 'Saved', 'Rejected'];
  displayedColumns: string[] = ['name', 'contact_number', 'email', 'status', 'created_on'];
  displayedColumnValue: string[] = ['NAME', 'CONTACT NUMBER', 'EMAIL', 'STATUS', 'CREATED ON'];

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
        this.dataSource = new MatTableDataSource<MyUsersList>(resp);
        /*  setTimeout(() => {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
           });*/
      }
    );
  }

}
