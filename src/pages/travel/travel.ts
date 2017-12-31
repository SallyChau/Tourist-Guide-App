import { Component } from '@angular/core';
import { BucketlistPage } from "./bucketlist/bucketlist";
import { OverviewPage } from "./overview/overview";

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Travelling</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Overview" [root]="overviewTab"></ion-tab>
      <ion-tab tabTitle="Bucketlist" [root]="bucketlistTab"></ion-tab>
    </ion-tabs>`
})
export class TravelPage {

  overviewTab: any;
  bucketlistTab: any;

  constructor(){
    this.overviewTab = OverviewPage;
    this.bucketlistTab = BucketlistPage;
  }


}
