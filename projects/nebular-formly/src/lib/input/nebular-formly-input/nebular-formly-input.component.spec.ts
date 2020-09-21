import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularFormlyInputComponent } from './nebular-formly-input.component';

describe('NebularFormlyInputComponent', () => {
  let component: NebularFormlyInputComponent;
  let fixture: ComponentFixture<NebularFormlyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebularFormlyInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularFormlyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
