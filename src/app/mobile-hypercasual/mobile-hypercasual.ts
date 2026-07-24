import { Component } from '@angular/core';
import { YoutubeVideo } from "../youtube-video/youtube-video";

@Component({
  selector: 'app-mobile-hypercasual',
  imports: [YoutubeVideo],
  templateUrl: './mobile-hypercasual.html',
  styleUrl: './mobile-hypercasual.scss',
})
export class MobileHypercasual {

  openStoreLink() 
  {
    //Se il dispositivo è IOS, apri il link dell'App Store, altrimenti apri il link del Google Play Store
    if (navigator.userAgent.match(/iPhone|iPad/i)) {
      window.open('https://apps.apple.com/it/app/push-it/id1474482918', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=srl.midnighttea.pushit&hl=it', '_blank');
    }    
  }
}
