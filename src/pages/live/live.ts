import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NiePage } from "./nie/nie";

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
}
