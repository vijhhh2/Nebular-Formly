import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbDatepickerModule, NbInputModule, NbTimepickerModule } from '@nebular/theme';
import { FormlyModule } from '@ngx-formly/core';
import { NebularFormlyFormFieldModule } from '../form-field/public-api';
import { DatePickerTypeComponent } from './date-picker.type';

@NgModule({
  declarations: [DatePickerTypeComponent],
  imports: [
    CommonModule,
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbInputModule,
    ReactiveFormsModule,
    NebularFormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'datepicker',
          component: DatePickerTypeComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class DatePickerModule {}
