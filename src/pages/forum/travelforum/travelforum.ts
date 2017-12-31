import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import { ThreadsServiceProvider } from "../../../providers/threads-service/threads-service";
import { ThreadPage } from "../threadPage/thread";

@Component({
  selector: 'page-travelforum',
  templateUrl: 'travelforum.html'
})
export class TravelforumPage {

  threads: any[] = [];

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController,
              public threadsService: ThreadsServiceProvider) {

  }

  ionViewDidLoad(){
    this.getAllThreads();
  }

  getAllThreads(){
    this.threadsService.getAllThreadsWithTag("travelling")
      .then(threads => {
        this.threads = threads;
      })
      .catch( error => {
        console.error( error );
      });
  }

  openAlertNewThread() {
    let prompt = this.alertCtrl.create({
      title: 'Create a new thread',
      message: "Enter a topic or question you would like to talk about.",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
            data.topic = "travelling";
            this.threadsService.createThread(data)
              .then(response => {
                this.threads.unshift(data);
              })
              .catch(error => {
                console.error(error);
              })
          }
        }
      ]
    });
    prompt.present();
  }

  updateThread(thread, index){
    thread = Object.assign({}, thread);
    this.threadsService.updateThread(thread)
      .then( response => {
        this.threads[index] = thread;
      })
      .catch( error => {
        console.error( error );
      })
  }

  deleteThread(thread: any, index){
    this.threadsService.deleteThread(thread)
      .then(response => {
        console.log( response );
        this.threads.splice(index, 1);
      })
      .catch( error => {
        console.error( error );
      })
  }

  openThreadPage(thread: any){
    this.navCtrl.push(ThreadPage, [thread]);
  }
}
