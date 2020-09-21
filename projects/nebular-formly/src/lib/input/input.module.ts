import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NbInputModule } from '@nebular/theme';
import { NebularFormlyInputComponent } from './nebular-formly-input/nebular-formly-input.component';

import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [NebularFormlyInputComponent],
  exports: [NebularFormlyInputComponent],
  imports: [
    CommonModule,
    NbInputModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          component: NebularFormlyInputComponent,
          name: 'input',
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
