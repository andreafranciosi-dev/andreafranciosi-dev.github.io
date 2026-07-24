import { Component } from '@angular/core';
import { YoutubeVideo } from "../youtube-video/youtube-video";
import { Contacts } from "../contacts/contacts";

@Component({
  selector: 'app-videogames-pc-console',
  imports: [YoutubeVideo, Contacts],
  templateUrl: './videogames-pc-console.html',
  styleUrl: './videogames-pc-console.scss',
})
export class VideogamesPcConsole {}
