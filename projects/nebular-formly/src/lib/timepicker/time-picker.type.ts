import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nbf-time-picker',
  template: `
    <input
      nbInput
      [nbTimepicker]="timepicker"
      [formControl]="formControl"
      [required]="to.required"
      [disabled]="to.disabled"
      [placeholder]="to.placeholder"
      [formlyAttributes]="field"
    />
    <nb-timepicker
      #timepicker
      [twelveHoursFormat]="to.twelveHoursFormat"
      [singleColumn]="to.singleColumn"
      [step]="to.step"
      withSeconds
    ></nb-timepicker>
  `,
})
export class TimePickerTypeComponent extends FieldType {}
