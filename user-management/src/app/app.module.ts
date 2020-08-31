import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {FilterDropdownComponent} from './users-view-approval/component/shared/filter-dropdown/filter-dropdown.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {RejectionDialogComponent} from './users-view-approval/component/shared/rejection-dialog/rejection-dialog.component';
import {ConfirmationDialogComponent} from './users-view-approval/component/shared/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {UserComponent} from './users-view-approval/component/user/user.component';
import {UserViewComponent} from './users-view-approval/component/user-view/user-view.component';
import {UserApprovalComponent} from './users-view-approval/component/user-approval/user-approval.component';
import {UserSubmissionComponent} from './users-view-approval/component/user-submission/user-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterDropdownComponent,
    RejectionDialogComponent,
    ConfirmationDialogComponent,
    UserComponent, UserViewComponent, UserApprovalComponent, UserSubmissionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatSortModule,

  ]
})
export class AppModule {
}
