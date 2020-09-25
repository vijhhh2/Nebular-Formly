import { NgModule } from '@angular/core';
import { FormlySelectOptionsPipe } from './transform-options.pipe';

@NgModule({
  declarations: [FormlySelectOptionsPipe],
  exports: [FormlySelectOptionsPipe],
})
export class SelectPipeModule {}
