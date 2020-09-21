import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'nbf-nebular-formly-wrapper-form-field',
  template: `
    <div class="form-group">
      <label *ngIf="to.label && to.hideLabel !== true" [attr.for]="id">
        {{ to.label }}
        <span
          *ngIf="to.required && to.hideRequiredMarker !== true"
          [style.color]="'red'"
          >*</span
        >
      </label>
      <ng-template #fieldComponent></ng-template>
      <div *ngIf="showError" class="invalid-feedback" [style.display]="'block'">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
      <small *ngIf="to.description" class="form-text text-muted">{{
        to.description
      }}</small>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NebularFormlyFormFieldWrapper extends FieldWrapper {}
