import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Timeline } from "../timeline/timeline";
import { Curriculum } from "../curriculum/curriculum";
import { Contacts } from "../contacts/contacts";

@Component({
  selector: 'app-home',
  imports: [Timeline, Curriculum, Contacts],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {

  ngAfterViewInit() {

  }
}
