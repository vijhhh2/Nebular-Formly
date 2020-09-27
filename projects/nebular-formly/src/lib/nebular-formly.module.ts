import { DatePickerModule } from './date-picker/date-picker.module';
import { NgModule } from '@angular/core';
import { NebularFormlyCheckboxModule } from './checkbox/public-api';
import { NebularFormlyInputModule } from './input/input.module';
import { RadioModule } from './radio/radio.module';
import { SelectPipeModule } from './select-pipe/select-pipe.module';
import { SelectModule } from './select/select.module';
import { TimepickerModule } from './timepicker/timepicker.module';
import { ToggleModule } from './toggle/toggle.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@NgModule({
  declarations: [],
  imports: [NebularFormlyInputModule, NebularFormlyCheckboxModule, RadioModule, SelectModule, SelectPipeModule, DatePickerModule, TimepickerModule, ToggleModule, AutocompleteModule],
})
export class NebularFormlyModule {}
