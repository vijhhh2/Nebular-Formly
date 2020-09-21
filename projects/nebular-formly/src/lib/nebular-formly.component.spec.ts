import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularFormlyComponent } from './nebular-formly.component';

describe('NebularFormlyComponent', () => {
  let component: NebularFormlyComponent;
  let fixture: ComponentFixture<NebularFormlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebularFormlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
