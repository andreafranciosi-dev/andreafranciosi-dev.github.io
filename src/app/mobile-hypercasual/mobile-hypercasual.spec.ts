import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHypercasual } from './mobile-hypercasual';

describe('MobileHypercasual', () => {
  let component: MobileHypercasual;
  let fixture: ComponentFixture<MobileHypercasual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileHypercasual],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileHypercasual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
