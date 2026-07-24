import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  imports: [],
  templateUrl: './youtube-video.html',
  styleUrl: './youtube-video.scss',
})
export class YoutubeVideo implements OnChanges {
  @Input() videoId!: string; // es. "dQw4w9WgXcQ" (solo l'ID, non l'url intero)
  
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    const url = `https://www.youtube.com/embed/${this.videoId}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}