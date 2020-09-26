import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

export enum DatePickers {
  RANGE_PICKER,
  DATE_PICKER,
  DATE_TIME_PICKER,
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container [ngSwitch]="to.pickerType">
      <ng-container *ngSwitchCase="DatePickers.DATE_PICKER">
        <input
          nbInput
          [nbDatepicker]="datepicker"
          [id]="id"
          [formControl]="formControl"
          [placeholder]="to.placeholder"
          [required]="to.required"
          [formlyAttributes]="field"
        />
        <nb-datepicker
          #datepicker
          [startView]="to.startView"
          [format]="to.format"
          [max]="to.max"
          [min]="to.min"
          (dateChange)="onDateChange($event)"
        ></nb-datepicker>
      </ng-container>
      <ng-container *ngSwitchCase="DatePickers.DATE_TIME_PICKER">
        <input
          nbInput
          [id]="id"
          [formControl]="formControl"
          [placeholder]="to.placeholder"
          [required]="to.required"
          [formlyAttributes]="field"
          [nbDatepicker]="dateTimePicker"
        />
        <nb-date-timepicker
          [startView]="to.startView"
          withSeconds
          [format]="to.format"
          #dateTimePicker
          [max]="to.max"
          [min]="to.min"
          [singleColumn]="to.singleColumn"
          [step]="to.step"
        ></nb-date-timepicker>
      </ng-container>
      <ng-container *ngSwitchCase="DatePickers.RANGE_PICKER">
        <input
          nbInput
          [nbDatepicker]="datepicker"
          [id]="id"
          [formControl]="formControl"
          [placeholder]="to.placeholder"
          [required]="to.required"
          [formlyAttributes]="field"
        />
        <nb-rangepicker
          [startView]="to.startView"
          [format]="to.format"
          [max]="to.max"
          [min]="to.min"
          #datepicker
          (dateChange)="onDateChange($event)"
        ></nb-rangepicker>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <input
          nbInput
          [nbDatepicker]="datepicker"
          [id]="id"
          [formControl]="formControl"
          [placeholder]="to.placeholder"
          [required]="to.required"
          [formlyAttributes]="field"
        />
        <nb-datepicker
          [startView]="to.startView"
          #datepicker
          [format]="to.format"
          [max]="to.max"
          [min]="to.min"
          (dateChange)="onDateChange($event)"
        ></nb-datepicker>
      </ng-container>
    </ng-container>
  `,
  selector: 'nbf-nebular-formly-date-picker',
})
export class DatePickerTypeComponent extends FieldType {
  public DatePickers = DatePickers;

  public defaultOptions = {};

  public onDateChange(event: any): void {
    if (this.to.dateChange) {
      return this.to.dateChange(this.field, event);
    }
  }
}
