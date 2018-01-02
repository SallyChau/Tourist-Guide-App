import { Component } from '@angular/core';
import {TravelforumPage} from "./travelforum/travelforum";
import {LiveforumPage} from "./liveforum/liveforum";
import {StudyforumPage} from "./studyforum/studyforum";

@Component({
  template: `
    <ion-header>
      <ion-navbar hideBackButton="true">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Forum</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Travelling" [root]="travelTab"></ion-tab>
      <ion-tab tabTitle="Living" [root]="liveTab"></ion-tab>
      <ion-tab tabTitle="Studying" [root]="studyTab"></ion-tab>
    </ion-tabs>`
})
export class ForumPage {

  protected travelTab: any;
  protected liveTab: any;
  protected studyTab: any;

  constructor(){
    this.travelTab = TravelforumPage;
    this.liveTab = LiveforumPage;
    this.studyTab = StudyforumPage;
  }
}
