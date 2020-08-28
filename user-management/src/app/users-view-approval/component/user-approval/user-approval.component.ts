import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {ApprovalList} from "../../model/approval-list";
import {RemotedataService} from "../../service/remotedata.service";


@Component({
  selector: 'app-user-approval',
  templateUrl: './user-approval.component.html',
  styleUrls: ['./user-approval.component.css']
})
export class UserApprovalComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['select', 'approval_type', 'approval_level', 'submitted_by', 'submitted_on', "action","action2"];
  displayedColumnValue:string[] = ['','Approval Type','Approval Level','Submitted By', 'Submitted On','Action','']
  options = ['All', 'Allocation', 'Addition', 'Modification', 'Reversal']
  dataSource;
  selection = new SelectionModel<ApprovalList>(true, []);

  constructor(private dataService: RemotedataService) {
  }


  ngOnInit() {

    this.dataService.loadApprovalList().subscribe(
      resp => {
        this.dataSource = new MatTableDataSource<ApprovalList>(resp);
        setTimeout(() => this.dataSource.paginator = this.paginator);
      }
    );

  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
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

  changeHoverColor = (row) => {
    console.log(row);
  }

}
