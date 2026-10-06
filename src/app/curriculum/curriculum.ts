import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  imports: [],
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.scss',
})
export class Curriculum {

  openCurriculum() {
    window.open('assets/cv.pdf', '_blank');
  }
}
