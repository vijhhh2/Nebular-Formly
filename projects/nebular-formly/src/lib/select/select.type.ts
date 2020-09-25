import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nbf-nebular-formly-select',
  template: `
    <nb-select
      *ngIf="to.groupProp; else noGroup"
      [formControl]="formControl"
      [multiple]="to.multiple"
      [id]="id"
      [formlyAttributes]="field"
      [placeholder]="to.placeholder"
      [required]="to.required"
      (selectedChange)="onSelectedChange($event)"
      [disabled]="to.disabled"
      [status]="to.status"
      [size]="to.size"
      [filled]="to.filled"
      [shape]="to.shape"
    >
      <nb-option-group
        *ngFor="let option of to.options | formlySelectOptions: field | async"
        [title]="option.label"
      >
        <nb-option
          *ngFor="let opt of option.group"
          [value]="opt.value"
          [disabled]="opt.disabled"
        >
          {{ opt.label }}
        </nb-option>
      </nb-option-group>
    </nb-select>

    <ng-template #noGroup>
      <nb-select
        [formControl]="formControl"
        [multiple]="to.multiple"
        [id]="id"
        [formlyAttributes]="field"
        [placeholder]="to.placeholder"
        [required]="to.required"
        (selectedChange)="onSelectedChange($event)"
        [disabled]="to.disabled"
        [status]="to.status"
        [size]="to.size"
        [filled]="to.filled"
        [shape]="to.shape"
      >
        <nb-option
          *ngFor="let opt of to.options | formlySelectOptions: field | async"
          [value]="opt.value"
          [disabled]="opt.disabled"
        >
          {{ opt.label }}
        </nb-option>
      </nb-select>
    </ng-template>
  `,
})
export class SelectTypeComponent extends FieldType {
  public defaultOptions = {
    templateOptions: {
      options: [],
      multiple: false,
      isGroup: false,
      status: 'basic',
      size: 'medium',
      filled: 'false',
      shape: 'rectangle',
    },
  };

  public onSelectedChange(value: string): void {
    if (this.to.selectedChange) {
      this.to.selectedChange(this.field, value);
    }
  }
}

// [
//   {
//     "label": "Male",
//     "group": [
//       {
//         "label": "Iron Man",
//         "value": "iron_man",
//         "disabled": false
//       },
//       {
//         "label": "Captain America",
//         "value": "captain_america",
//         "disabled": false
//       },
//       {
//         "label": "Hulk",
//         "value": "hulk",
//         "disabled": false
//       }
//     ]
//   },
//   {
//     "label": "Female",
//     "group": [
//       {
//         "label": "Black Widow",
//         "value": "black_widow",
//         "disabled": false
//       },
//       {
//         "label": "Captain Marvel",
//         "value": "captain_marvel",
//         "disabled": false
//       }
//     ]
//   }
// ]
