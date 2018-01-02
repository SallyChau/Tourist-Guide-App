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

  constructor(protected navCtrl: NavController) {

  }

  protected openTravelPage(){
    this.navCtrl.push(TravelPage);
  }

  protected openLivePage(){
    this.navCtrl.push(LivePage);
  }

  protected openStudyPage(){
    this.navCtrl.push(StudyPage);
  }

  protected openForumPage(){
    this.navCtrl.push(ForumPage);
  }

}
