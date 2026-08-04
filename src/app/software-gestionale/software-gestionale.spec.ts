import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareGestionale } from './software-gestionale';

describe('SoftwareGestionale', () => {
  let component: SoftwareGestionale;
  let fixture: ComponentFixture<SoftwareGestionale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareGestionale],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareGestionale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
