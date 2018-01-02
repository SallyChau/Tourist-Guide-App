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

  constructor(protected navCtrl: NavController){

  }

  protected openNiePage(){
    this.navCtrl.push(NiePage);
  }

  protected openAccomodationPage(){
    this.navCtrl.push(AccomodationPage);
  }

  protected openBusPage(){
    this.navCtrl.push(BusPage);
  }
}
