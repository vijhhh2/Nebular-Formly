import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nbf-nebular-formly-textarea',
  template: `
    <textarea
      nbInput
      [formControl]="formControl"
      [formlyAttributes]="field"
      [fullWidth]="to.fullWidth || false"
      [status]="showError ? 'danger' : 'info'"
      [placeholder]="to.placeholder"
    ></textarea>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaTypeComponent extends FieldType {

}
