import { NgModule } from '@angular/core';
import { NebularFormlyInputModule } from './input/input.module';
import { NebularFormlyComponent } from './nebular-formly.component';



@NgModule({
  declarations: [NebularFormlyComponent],
  imports: [
    NebularFormlyInputModule
  ],
  exports: [NebularFormlyComponent, NebularFormlyInputModule]
})
export class NebularFormlyModule { }
