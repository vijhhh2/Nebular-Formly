import { NgModule } from '@angular/core';
import { NebularFormlyCheckboxModule } from './checkbox/public-api';
import { NebularFormlyInputModule } from './input/input.module';
import { RadioModule } from './radio/radio.module';

@NgModule({
  declarations: [],
  imports: [NebularFormlyInputModule, NebularFormlyCheckboxModule, RadioModule],
  exports: [NebularFormlyInputModule, NebularFormlyCheckboxModule],
})
export class NebularFormlyModule {}
