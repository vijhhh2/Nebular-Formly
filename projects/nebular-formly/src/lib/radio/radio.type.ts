import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nbf-nebular-formly-radio',
  template: `
    <ng-container *ngIf="to.disabled; else elseTemplate">
      <nb-radio-group
        [formControl]="formControl"
        [name]="to.name"
        [formlyAttributes]="field"
        [required]="to.required"
        [disabled]="to.disabled"
        [status]="to.status"
        [ngClass]="{
          'row': to.arrange === 'row'
        }"
      >
        <nb-radio
          *ngFor="
            let option of to.options | formlySelectOptions: field | async;
            let i = index
          "
          [id]="id + '_' + i"
          [value]="option.value"
        >
          {{ option.label }}
        </nb-radio>
      </nb-radio-group>
    </ng-container>
    <ng-template #elseTemplate>
      <nb-radio-group
        [formControl]="formControl"
        [name]="to.name"
        [formlyAttributes]="field"
        [required]="to.required"
        [status]="to.status"
        [ngClass]="{
          'row': to.arrange === 'row'
        }"
      >
        <nb-radio
          *ngFor="
            let option of to.options | formlySelectOptions: field | async;
            let i = index
          "
          [id]="id + '_' + i"
          [value]="option.value"
          [disabled]="option.disabled"
        >
          {{ option.label }}
        </nb-radio>
      </nb-radio-group>
    </ng-template>
  `,
  styles: ['.row { display: flex; flex-flow: row wrap; }'],
})
export class RadioTypeComponent extends FieldType {
  public defaultOptions = {
    templateOptions: {
      disabled: false,
      options: [],
      status: 'info',
    },
  };
}
