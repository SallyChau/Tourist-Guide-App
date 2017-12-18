import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NaturePage } from "../nature/nature";
import { ShopsPage } from "../shops/shops";

@Component({
  selector: 'page-bucketlist',
  templateUrl: 'bucketlist.html'
})
export class BucketlistPage {

  constructor(public navCtrl: NavController){

  }
}
