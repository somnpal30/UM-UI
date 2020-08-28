import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RejectionDialogData} from "../../../model/rejectionDialogData";

@Component({
  selector: 'rejection-dialog-component',
  templateUrl: './rejection-dialog.component.html',
  styleUrls: ['./rejection-dialog.component.css']
})
export class RejectionDialogComponent {


  fromDialog: string;
  constructor(public dialogRef: MatDialogRef<RejectionDialogComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
