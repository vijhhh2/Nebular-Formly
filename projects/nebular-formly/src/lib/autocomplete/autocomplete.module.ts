import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NebularFormlyFormFieldModule } from '../form-field/form-field.module';

import { NbAutocompleteModule, NbInputModule } from '@nebular/theme';

import { AutoCompleteTypeComponent } from './autocomplete.type';

@NgModule({
  declarations: [AutoCompleteTypeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbAutocompleteModule,
    NebularFormlyFormFieldModule,
    NbInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'autocomplete',
          component: AutoCompleteTypeComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class AutocompleteModule {}
