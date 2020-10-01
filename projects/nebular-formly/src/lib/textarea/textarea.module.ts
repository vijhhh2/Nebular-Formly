import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbInputModule } from '@nebular/theme';
import { FormlyModule } from '@ngx-formly/core';
import { NebularFormlyFormFieldModule } from '../form-field/form-field.module';
import { TextAreaTypeComponent } from './textarea.type';

@NgModule({
  declarations: [TextAreaTypeComponent],
  imports: [
    CommonModule,
    NebularFormlyFormFieldModule,
    ReactiveFormsModule,
    NbInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'textarea',
          component: TextAreaTypeComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ]
})
export class TextareaModule { }
