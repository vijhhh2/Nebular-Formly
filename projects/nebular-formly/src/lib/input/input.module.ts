import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NbInputModule } from '@nebular/theme';
import { NebularFormlyInputComponent } from './nebular-formly-input.component';

import { FormlyModule } from '@ngx-formly/core';
import { NebularFormlyFormFieldModule } from '../form-field/public-api';

@NgModule({
  declarations: [NebularFormlyInputComponent],
  exports: [NebularFormlyInputComponent],
  imports: [
    CommonModule,
    NbInputModule,
    ReactiveFormsModule,
    NebularFormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          component: NebularFormlyInputComponent,
          name: 'input',
          wrappers: ['form-field'],
        },
        {
          extends: 'input',
          name: 'string',
        },
        {
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
          extends: 'input',
          name: 'number',
        },
        {
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
          name: 'integer',
          extends: 'input',
        },
      ],
    }),
  ],
})
export class NebularFormlyInputModule {}
