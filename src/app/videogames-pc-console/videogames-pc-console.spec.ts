import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesPcConsole } from './videogames-pc-console';

describe('VideogamesPcConsole', () => {
  let component: VideogamesPcConsole;
  let fixture: ComponentFixture<VideogamesPcConsole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogamesPcConsole],
    }).compileComponents();

    fixture = TestBed.createComponent(VideogamesPcConsole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
