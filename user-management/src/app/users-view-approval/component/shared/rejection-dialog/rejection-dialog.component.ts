import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

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
