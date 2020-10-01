import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nbf-nebular-formly-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nb-toggle
      [formControl]="formControl"
      [required]="to.required"
      [disabled]="to.disabled"
      [status]="to.status || 'info'"
      [labelPosition]="to.labelPosition"
      >{{ to.label }}</nb-toggle
    >
  `,
})
export class ToggleTypeComponent extends FieldType {}
