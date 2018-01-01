import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import {ThreadPage} from "../threadPage/thread";
import { ThreadsServiceProvider } from "../../../providers/threads-service/threads-service";

@Component({
  selector: 'page-studyforum',
  templateUrl: 'studyforum.html'
})
export class StudyforumPage {

  threads: any[] = [];

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController,
              public threadsService: ThreadsServiceProvider) {

  }

  ionViewDidLoad(){
    this.getAllThreads();
  }

  getAllThreads(){
    this.threadsService.getAllThreadsWithTag("studying")
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
            data.topic = "studying";
            var date = new Date();
            var month = date.getMonth() + 1;
            data.date = date.getFullYear().toString() + "-" +
              month.toString() + "-" +
              date.getDate().toString() + " " +
              date.getHours().toString() + ":" +
              date.getMinutes().toString() + ":" +
              date.getSeconds().toString();
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
    // delete all answers to thread
    this.threadsService.deleteAnswer(thread.id);

    // delete thread
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
