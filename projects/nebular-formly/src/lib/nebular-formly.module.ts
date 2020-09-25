import { NgModule } from '@angular/core';
import { NebularFormlyCheckboxModule } from './checkbox/public-api';
import { NebularFormlyInputModule } from './input/input.module';
import { RadioModule } from './radio/radio.module';
import { SelectPipeModule } from './select-pipe/select-pipe.module';
import { SelectModule } from './select/select.module';

@NgModule({
  declarations: [],
  imports: [NebularFormlyInputModule, NebularFormlyCheckboxModule, RadioModule, SelectModule, SelectPipeModule],
})
export class NebularFormlyModule {}
