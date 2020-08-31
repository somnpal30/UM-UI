import {NgModule} from '@angular/core';
import {MatUiModule} from '../../../mat-ui.module';
import {SharedModule} from '../shared/shared.module';
import {UserApprovalComponent} from './user-approval.component';

@NgModule({
  declarations: [UserApprovalComponent],
  imports: [
    MatUiModule,
    SharedModule
  ],
  exports: [
    //UserApprovalComponent
  ]
})

export class UserApprovalModule {

}
