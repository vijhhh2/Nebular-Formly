import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbRadioModule } from '@nebular/theme';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NebularFormlyFormFieldModule } from '../form-field/form-field.module';
import { RadioTypeComponent } from './radio.type';

@NgModule({
  declarations: [RadioTypeComponent],
  imports: [
    ReactiveFormsModule,
    NebularFormlyFormFieldModule,
    CommonModule,
    FormlySelectModule,
    NbRadioModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radio',
          component: RadioTypeComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class RadioModule {}
