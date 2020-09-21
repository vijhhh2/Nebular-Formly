import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NebularFormlyFormFieldWrapper } from './form-field.wrapper';

@NgModule({
  declarations: [NebularFormlyFormFieldWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: NebularFormlyFormFieldWrapper,
        },
      ],
    }),
  ],
})
export class NebularFormlyFormFieldModule {}
