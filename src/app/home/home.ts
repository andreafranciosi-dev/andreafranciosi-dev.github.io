import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Timeline } from "../timeline/timeline";
import { Curriculum } from "../curriculum/curriculum";
import { Contacts } from "../contacts/contacts";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Timeline, Curriculum, Contacts, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {

  ngAfterViewInit() {

  }
}
