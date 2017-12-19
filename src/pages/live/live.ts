import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NiePage } from "./nie/nie";
import {AccomodationPage} from "./accomodation/accomodation";
import {BusPage} from "./bus/bus";

@Component({
  selector: 'page-live',
  templateUrl: 'live.html'
})
export class LivePage {

  constructor(public navCtrl: NavController){

  }

  openNiePage(){
    this.navCtrl.setRoot(NiePage);
  }

  openAccomodationPage(){
    this.navCtrl.setRoot(AccomodationPage);
  }

  openBusPage(){
    this.navCtrl.setRoot(BusPage);
  }
}
