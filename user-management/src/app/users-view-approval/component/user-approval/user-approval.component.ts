import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ApprovalList} from "../../model/approval-list";
import {RemotedataService} from "../../service/remotedata.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-user-approval',
  templateUrl: './user-approval.component.html',
  styleUrls: ['./user-approval.component.css']
})
export class UserApprovalComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['select', 'approval_type', 'approval_level', 'submitted_by', 'submitted_on','details', "action", "action2"];
  displayedColumnValue: string[] = ['', 'Approval Type', 'Approval Level', 'Submitted By', 'Submitted On','Details', 'Approve', 'Reject']
  options = ['All', 'Allocation', 'Addition', 'Modification', 'Reversal']
  dataSource;
  selection = new SelectionModel<ApprovalList>(true, []);


  constructor(private dataService: RemotedataService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {

    this.dataService.loadApprovalList().subscribe(
      resp => {
        this.dataSource = new MatTableDataSource<ApprovalList>(resp);
        setTimeout(() => {
          this.dataSource.sort = this.sort
          this.dataSource.paginator = this.paginator

        });
      }
    );

  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.id));
  }



  showDetails = (id:string) => {
    //console.log(row.id);
    this.router.navigate(['../view-details'],
      {relativeTo: this.route, queryParams: {identifier: id, mode: 'view'}, queryParamsHandling: 'merge'});

  }
  approve = (id:string) => {
    console.log(id);
  }
  reject = (id:string) => {
    console.log(id);
  }
}
