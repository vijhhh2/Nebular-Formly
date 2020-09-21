import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form = new FormGroup({});
  public model = { email: '' };
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
  ];

  public onSubmit(model: any): void {
    console.log(model);
  }
}
