import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nbf-nebular-formly-input',
  template: `
    <input
      nbInput
      *ngIf="type !== 'number'; else numbTemplate"
      [type]="type"
      [formControl]="formControl"
      [formlyAttributes]="field"
      type="text"
      [status]="showError ? 'danger' : 'info'"
      [placeholder]="to.placeholder"
    />
    <ng-template #numbTemplate>
      <input
        nbInput
        type="text"
        [formControl]="formControl"
        [formlyAttributes]="field"
        type="text"
        [status]="showError ? 'danger' : 'info'"
        [placeholder]="to.placeholder"
      />
    </ng-template>
  `,
  // tslint:disable-next-line: object-literal-sort-keys
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NebularFormlyInputComponent extends FieldType implements OnInit {
  get type(): string {
    return this.to.type || 'text';
  }
  public ngOnInit(): void {
    console.log(this.to);
  }
}
