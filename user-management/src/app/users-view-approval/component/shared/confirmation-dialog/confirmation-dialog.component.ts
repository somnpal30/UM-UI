import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  confirmDialog: string

  constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
  }

  ngOnInit(): void {
  }

  onClick = (message) => {
    //console.log(message)
    this.dialogRef.close(message);
  }

}
