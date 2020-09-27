import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbInputModule, NbTimepickerModule } from '@nebular/theme';
import { FormlyModule } from '@ngx-formly/core';
import { NebularFormlyFormFieldModule } from '../form-field/public-api';
import { TimePickerTypeComponent } from './time-picker.type';

@NgModule({
  declarations: [TimePickerTypeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbTimepickerModule.forRoot(),
    NebularFormlyFormFieldModule,
    NbInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'timepicker',
          component: TimePickerTypeComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class TimepickerModule {}
