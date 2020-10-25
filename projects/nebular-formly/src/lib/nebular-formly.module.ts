import { NgModule } from '@angular/core';

// import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { NebularFormlyCheckboxModule } from './checkbox/checkbox.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { NebularFormlyFormFieldModule } from './form-field/form-field.module';
import { NebularFormlyInputModule } from './input/input.module';
import { RadioModule } from './radio/radio.module';
import { SelectPipeModule } from './select-pipe/select-pipe.module';
import { SelectModule } from './select/select.module';
import { TimepickerModule } from './timepicker/timepicker.module';
import { ToggleModule } from './toggle/toggle.module';
import { TextareaModule } from './textarea/textarea.module';

@NgModule({
  declarations: [],
  imports: [
    NebularFormlyInputModule,
    NebularFormlyCheckboxModule,
    NebularFormlyFormFieldModule,
    RadioModule,
    SelectModule,
    SelectPipeModule,
    DatePickerModule,
    TimepickerModule,
    ToggleModule,
    // AutocompleteModule,
    TextareaModule,
  ],
})
export class NebularFormlyModule {}
