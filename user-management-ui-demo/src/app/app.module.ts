import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule, routingComponent} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeadercomponentComponent} from './component/headercomponent/headercomponent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BodycomponentComponent} from './component/bodycomponent/bodycomponent.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DynamicFormComponent} from './component/dynamic-form/dynamic-form.component';
import {DynamicFieldDirective} from './directive/dynamic-field/dynamic-field.directive';
import {InputComponent} from './component/dynamic-fields/input/input.component';
import {SelectComponent} from './component/dynamic-fields/select/select.component';
import {DateComponent} from './component/dynamic-fields/date/date.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {DynamicStepperComponent} from './component/dynamic-stepper/dynamic-stepper.component';
import {ConfirmationPanelComponent} from './component/confirmation-panel/confirmation-panel.component';
import {CommonserviceService} from "./service/commonservice/commonservice.service";
import {KycComponentComponent} from './component/kyc-component/kyc-component.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AccordianComponent} from './component/accordian/accordian.component';
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    BodycomponentComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    SelectComponent,
    DateComponent,
    DynamicStepperComponent,
    ConfirmationPanelComponent,
    KycComponentComponent,
    AccordianComponent,
    routingComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatDividerModule,
    ],
  providers: [CommonserviceService, FormsModule, MatNativeDateModule],
  bootstrap: [AppComponent],
  //exports: [ MatFormFieldModule, MatInputModule ]
})
export class AppModule {
}
