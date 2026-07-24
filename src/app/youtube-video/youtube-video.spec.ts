import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideo } from './youtube-video';

describe('YoutubeVideo', () => {
  let component: YoutubeVideo;
  let fixture: ComponentFixture<YoutubeVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeVideo],
    }).compileComponents();

    fixture = TestBed.createComponent(YoutubeVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
