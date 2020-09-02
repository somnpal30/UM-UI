import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {RemotedataService} from '../../service/remotedata.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MyUsers} from '../../model/my-users';
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
  displayedColumns: string[] = ['action','name', 'contact_number', 'email', 'status', 'created_on'];
  displayedColumnValue: string[] = ['ACTION','NAME', 'CONTACT NUMBER', 'EMAIL', 'STATUS', 'CREATED ON'];
  expandedElement: MyUsers | null;
  subscription: Subscription;
  dataSource;

  arrowselector:string = 'keyboard_arrow_right'

  constructor(private dataService: RemotedataService) {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.dataService.loadMyUserList().subscribe(
      resp => {
       //console.log(resp)
        this.dataSource = new MatTableDataSource<MyUsers>(resp);
        /*  setTimeout(() => {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
           });*/
      }
    );
  }

}
