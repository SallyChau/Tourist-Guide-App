import { Component } from '@angular/core';
import { AlertController, NavController } from "ionic-angular";
import { ThreadsServiceProvider } from "../../../providers/threads-service/threads-service";
import { ThreadPage } from "../threadPage/thread";

@Component({
  selector: 'page-travelforum',
  templateUrl: 'travelforum.html'
})
export class TravelforumPage {

  protected threads: any[] = [];

  constructor(protected alertCtrl: AlertController,
              protected navCtrl: NavController,
              protected threadsService: ThreadsServiceProvider) {

  }

  protected ionViewDidLoad(){
    this.getAllThreads();
  }

  protected getAllThreads(){
    this.threadsService.getAllThreadsWithTag("travelling")
      .then(threads => {
        this.threads = threads;
      })
      .catch( error => {
        console.error( error );
      });
  }

  protected openAlertNewThread() {
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

  protected updateThread(thread, index){
    thread = Object.assign({}, thread);
    this.threadsService.updateThread(thread)
      .then( response => {
        this.threads[index] = thread;
      })
      .catch( error => {
        console.error( error );
      })
  }

  protected deleteThread(thread: any, index){
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

  protected openThreadPage(thread: any){
    this.navCtrl.push(ThreadPage, [thread]);
  }
}
