import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbSelectModule } from '@nebular/theme';
import { FormlyModule } from '@ngx-formly/core';
import { NebularFormlyFormFieldModule } from '../form-field/form-field.module';
import { SelectPipeModule } from '../select-pipe/select-pipe.module';
import { SelectTypeComponent } from './select.type';

@NgModule({
  declarations: [SelectTypeComponent],
  imports: [
    CommonModule,
    NbSelectModule,
    NebularFormlyFormFieldModule,
    ReactiveFormsModule,
    SelectPipeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: SelectTypeComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class SelectModule {}
