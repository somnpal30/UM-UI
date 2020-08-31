import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './users-view-approval/component/user/user.component';
import {UserViewComponent} from './users-view-approval/component/user-view/user-view.component';
import {UserSubmissionComponent} from './users-view-approval/component/user-submission/user-submission.component';
import {MatUiModule} from './mat-ui.module';
import {UserApprovalModule} from './users-view-approval/component/user-approval/user-approval.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, UserViewComponent, UserSubmissionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatUiModule,
    UserApprovalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
