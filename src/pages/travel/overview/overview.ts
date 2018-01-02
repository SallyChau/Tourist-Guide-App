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

  protected openNaturePage() {
    this.navCtrl.push(NaturePage);
  }

  protected openShopsPage() {
    this.navCtrl.push(ShopsPage);
  }

  protected openSightsPage() {
    this.navCtrl.push(SightsPage);
  }
}
