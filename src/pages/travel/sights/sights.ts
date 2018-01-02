import { Component } from '@angular/core';
import { BucketlistPage } from "../bucketlist/bucketlist";
import { AlertController } from "ionic-angular";

@Component({
  selector: 'page-sights',
  templateUrl: 'sights.html'
})

export class SightsPage {

  constructor(private alertCtrl: AlertController,
              private bucketlist:BucketlistPage){

  }

  protected addToBucketlist(title:any){
    this.bucketlist.createTask(title);

    let alert = this.alertCtrl.create({
      title: 'Added to bucketlist',
      subTitle: 'The task "' + title + '" has been added to your bucketlist.',
      buttons: ['OK']
    });
    alert.present();
  }
}
