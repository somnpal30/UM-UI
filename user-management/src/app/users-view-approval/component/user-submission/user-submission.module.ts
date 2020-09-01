import {NgModule} from '@angular/core';
import {MatUiModule} from '../../../mat-ui.module';
import {SharedModule} from '../shared/shared.module';
import {UserSubmissionComponent} from './user-submission.component';

@NgModule({
  declarations: [UserSubmissionComponent],
  imports: [
    MatUiModule,
    SharedModule
  ],
})

export class UserSubmissionModule {

}
