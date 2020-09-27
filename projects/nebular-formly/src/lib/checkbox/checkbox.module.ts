import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { NbCheckboxModule } from '@nebular/theme';

import { NebularFormlyFormFieldModule } from '../form-field/form-field.module';
import { NebularFormlyCheckboxComponent } from './checkbox.type';

@NgModule({
  declarations: [NebularFormlyCheckboxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    NebularFormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: NebularFormlyCheckboxComponent,
          wrappers: ['form-field'],
        },
        {
          name: 'boolean',
          extends: 'checkbox',
        },
      ],
    }),
  ],
})
export class NebularFormlyCheckboxModule {}
