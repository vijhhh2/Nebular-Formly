import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NebularFormlyModule } from 'nebular-formly';
import { FormlyModule } from '@ngx-formly/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NebularFormlyModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
