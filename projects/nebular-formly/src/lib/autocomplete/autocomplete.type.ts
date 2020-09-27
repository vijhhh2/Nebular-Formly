import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nbf-nebular-formly-autocomplete',
  template: `
    <input
      [formControl]="formControl"
      nbInput
      type="text"
      [formlyAttributes]="field"
      [required]="to.required"
      [placeholder]="to.placeholder"
      [disabled]="to.disabled"
      [status]="showError ? 'danger' : 'info'"
      [nbAutocomplete]="autoControl"
    />

    <nb-autocomplete #autoControl>
      <nb-option
        *ngFor="let option of filteredControlOptions$ | async"
        [value]="option.label"
      >
        {{ option.label }}
      </nb-option>
    </nb-autocomplete>
  `,
})
export class AutoCompleteTypeComponent extends FieldType implements OnInit {

  public filteredControlOptions$: Observable<any>;

  public ngOnInit(): void {
    this.filteredControlOptions$ = this.formControl.valueChanges.pipe(
      startWith(''),
      switchMap((term) => this.to.filter(term)),
    );
  }
}
