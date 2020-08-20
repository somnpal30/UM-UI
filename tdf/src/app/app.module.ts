import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateComponent } from './component/form-template/form-template.component';
import { CommonServiceService } from './service/common-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { DynamicPanelComponent } from './component/dynamic-panel/dynamic-panel.component';
import { DynamicFieldDirective } from './component/dynamic-field/dynamic-field.directive';
import { TextInputComponent } from './component/dynamic-fields/text-input/text-input.component';
import { SelectComponent } from './component/dynamic-fields/select/select.component';
import { DateComponent } from './component/dynamic-fields/date/date.component';
import { UploadComponent } from './component/dynamic-fields/upload/upload.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { TestComponentComponent } from './component/test-component/test-component.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    DynamicFormComponent,
    DynamicPanelComponent,
    DynamicFieldDirective,
    TextInputComponent,
    SelectComponent,
    DateComponent,
    UploadComponent,
    TestComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,

  ],
  providers: [MatNativeDateModule,CommonServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
