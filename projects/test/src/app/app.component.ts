import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DatePickers } from 'projects/nebular-formly/src/public-api';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form = new FormGroup({});
  public model = {
    email: '',
    type: ['Temporary', 'Ordinary'],
    type2: 'captain_america',
  };
  public radioOptions$ = of([
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ]);

  public selectOptions$ = of([
    { value: 'Temporary', label: 'Temporary' },
    { value: 'Permanent', label: 'Permanent' },
    { value: 'Ordinary', label: 'Ordinary' },
    { value: 'Not-Ordinary', label: 'Not Ordinary' },
  ]);

  public selectOptions3$ = of([
    { label: 'Iron Man', id: 'iron_man', gender: 'Male', disabled: true },
    { label: 'Captain America', id: 'captain_america', gender: 'Male' },
    {
      label: 'Black Widow',
      id: 'black_widow',
      gender: 'Female',
      disabled: true,
    },
    { label: 'Hulk', id: 'hulk', gender: 'Male' },
    {
      label: 'Captain Marvel',
      id: 'captain_marvel',
      gender: 'Female',
      disabled: true,
    },
  ]);

  public fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
    {
      key: 'acceptTerms',
      type: 'checkbox',
      templateOptions: {
        checkboxMessage: 'Accept license and agreement',
        required: true,
      },
      validators: {
        validation: ['checked'],
      },
    },
    {
      key: 'sex',
      type: 'radio',
      templateOptions: {
        name: 'sex1',
        label: 'Sex',
        disabled: false, // make it true to disable it globally
        options: this.radioOptions$,
        status: 'success',
        required: true,
        arrange: 'row', // remove arrange to make options arrange column wise
      },
    },
    // {
    //   key: 'sex2',
    //   type: 'radio',
    //   templateOptions: {
    //     name: 'sex2', // Name is must and should
    //     label: 'Sex',
    //     disabled: false, // make it true to disable it globally
    //     options: this.radioOptions$,
    //     status: 'danger',
    //     required: true,
    //     arrange: 'row', // remove arrange to make options arrange column wise
    //   },
    // },
    {
      key: 'type',
      type: 'select',
      templateOptions: {
        label: 'Select Type',
        placeholder: 'Select Type',
        disabled: false,
        options: this.selectOptions$,
        required: true,
        multiple: true,
        shape: 'round',
      },
    },
    {
      key: 'type2',
      type: 'select',
      templateOptions: {
        label: 'Select Group Type',
        placeholder: 'Select Group Type',
        status: 'success',
        disabled: false,
        options: this.selectOptions3$,
        groupProp: 'gender',
        valueProp: 'id',
        labelProp: 'label',
        required: true,
        size: 'large',
        filled: true,
      },
    },
    {
      key: 'date',
      type: 'datepicker',
      templateOptions: {
        label: 'Select Date',
        placeholder: 'Select Date',
        required: true,
        pickerType: DatePickers.DATE_PICKER,
      },
    },
    {
      key: 'date2',
      type: 'datepicker',
      templateOptions: {
        label: 'Select Date',
        placeholder: 'Select Date',
        startView: 'month',
        required: true,
        pickerType: DatePickers.DATE_TIME_PICKER,
      },
    },
    {
      key: 'date3',
      type: 'datepicker',
      templateOptions: {
        label: 'Select Date',
        placeholder: 'Select Date',
        required: true,
        pickerType: DatePickers.RANGE_PICKER,
      },
    },
  ];

  public onSubmit(model: any): void {
    console.log(model);
  }
}
