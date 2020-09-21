import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nbf-checkbox',
  template: `
    <nb-checkbox
      [formControl]="formControl"
      [disabled]="to.disabled"
      [indeterminate]="to.indeterminate && formControl.value == null"
      [status]="to.status || 'info'"
    >
      {{ checkboxMessage }}
      <span
        class="required"
        *ngIf="to.required && to.hideRequiredMarker !== true"
        >*</span
      >
    </nb-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NebularFormlyCheckboxComponent extends FieldType {

  public defaultOptions = {
    templateOptions: {
      disabled: false,
      indeterminate: true,
    },
  };

  get checkboxMessage(): string {
    return this.to.checkboxMessage;
  }
}
