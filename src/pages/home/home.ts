import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TravelPage} from "../travel/travel";
import {LivePage} from "../live/live";
import {StudyPage} from "../study/study";
import {ForumPage} from "../forum/forum";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openTravelPage(){
    this.navCtrl.setRoot(TravelPage);
  }

  openLivePage(){
    this.navCtrl.setRoot(LivePage);
  }

  openStudyPage(){
    this.navCtrl.setRoot(StudyPage);
  }

  openForumPage(){
    this.navCtrl.setRoot(ForumPage);
  }

}
