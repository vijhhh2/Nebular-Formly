import { NgModule } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormlyModule } from '@ngx-formly/core';
import { NebularFormlyModule } from 'nebular-formly';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbRadioModule } from '@nebular/theme';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';

export function isChecked(formControl: FormControl): ValidationErrors {
  return formControl.value === true ? null : { checked: true };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NebularFormlyModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    AppRoutingModule,
    NbCardModule,
    NbRadioModule,
    FormlyModule.forRoot({
      validators: [{ name: 'checked', validation: isChecked }],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'checked', message: 'Please agree to the terms' },
      ],
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
