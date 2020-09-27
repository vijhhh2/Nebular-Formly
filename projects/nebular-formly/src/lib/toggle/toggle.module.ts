import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbToggleModule } from '@nebular/theme';
import { FormlyModule } from '@ngx-formly/core';
import { ToggleTypeComponent } from './toggle.type';

@NgModule({
  declarations: [ToggleTypeComponent],
  imports: [
    CommonModule,
    NbToggleModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'toggle',
          component: ToggleTypeComponent,
        },
      ],
    }),
  ],
})
export class ToggleModule {}
