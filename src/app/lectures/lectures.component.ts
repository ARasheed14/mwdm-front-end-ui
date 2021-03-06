import { Component, Provider } from '@angular/core';
import { AudioProvider } from 'ionic-audio';
import { LecturesService } from './lectures.service';
import { LoadingController, ModalController, ViewController } from 'ionic-angular';
import { LoadingComponent } from '../loading/loading.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/topromise';
import * as moment from 'moment';


// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'lectures.component.html',
  styleUrls: ['/lectures.component.scss'],
})

export class LecturesComponent {
  allTracks: any[];
  episodes: any;
  selectedEpisode:any;

  constructor(http: Http, private lecturesService: LecturesService, private _audioProvider: AudioProvider, private loadingCtrl: LoadingController, private modalCtrl: ModalController) {

  }

  ngOnInit() {
    let loading = this.modalCtrl.create(LoadingComponent);
    // Show Loading Component
    loading.present();
    this.getEpisodes(()=>{
      loading.dismiss();
    })

  }
  getEpisodes(callback?) {
    this.lecturesService.getEpisodes().subscribe(response => {
      this.episodes = response.response.items.map(this.formatEpisode);
      callback();
    });
  }
  doRefresh(refresher) {
    this.getEpisodes(()=>{
      refresher.complete();
    });
  }

  /**
   * @name formatEpisode
   * @description Formats the episode for audio player
   * @param {Object} - episode - from the API
   */
  formatEpisode = (episode) =>{
    console.log(episode);
        return {
          src: `https://api.spreaker.com/listen/episode/${episode.episode_id}/http`,
          title: episode.title,
          art: episode.image_url,
          preload: 'metadeta',
          published_at: episode.published_at.split(' ')[0],
          type: episode.type
        };
  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.play(this.selectedEpisode);
  }

  pauseSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.pause(this.selectedEpisode);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }
}
