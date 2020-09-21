import { NgModule } from '@angular/core';
import { NebularFormlyCheckboxModule } from './checkbox/public-api';
import { NebularFormlyInputModule } from './input/input.module';

@NgModule({
  declarations: [],
  imports: [NebularFormlyInputModule, NebularFormlyCheckboxModule],
  exports: [NebularFormlyInputModule, NebularFormlyCheckboxModule],
})
export class NebularFormlyModule {}
