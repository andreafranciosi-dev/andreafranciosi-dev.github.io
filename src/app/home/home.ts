import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Timeline } from "../timeline/timeline";

@Component({
  selector: 'app-home',
  imports: [Timeline],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {

  ngAfterViewInit() {

  }
}
