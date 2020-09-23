import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form = new FormGroup({});
  public model = { email: '' };
  public radioOptions$ = of([
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female',},
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
    {
      key: 'sex',
      type: 'radio',
      templateOptions: {
        name: 'sex2',
        label: 'Sex',
        disabled: false, // make it true to disable it globally
        options: this.radioOptions$,
        status: 'danger',
        required: true,
        arrange: 'row', // remove arrange to make options arrange column wise
      },
    },
  ];

  public onSubmit(model: any): void {
    console.log(model);
  }
}
