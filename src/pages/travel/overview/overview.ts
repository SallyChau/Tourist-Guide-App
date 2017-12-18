import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NaturePage } from "../nature/nature";
import { ShopsPage } from "../shops/shops";
import { SightsPage } from "../sights/sights";

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  constructor(public navCtrl: NavController){

  }

  openNaturePage() {
    this.navCtrl.setRoot(NaturePage);
  }

  openShopsPage() {
    this.navCtrl.setRoot(ShopsPage);
  }

  openSightsPage() {
    this.navCtrl.setRoot(SightsPage);
  }
}
