import { Component } from '@angular/core';
import { AlertController } from "ionic-angular";
import { ThreadsServiceProvider } from "../../../providers/threads-service/threads-service";

@Component({
  selector: 'page-liveforum',
  templateUrl: 'liveforum.html'
})
export class LiveforumPage {

  threads: any[] = [];

  constructor(public alertCtrl: AlertController,
              public threadsService: ThreadsServiceProvider) {

  }

  ionViewDidLoad(){
    this.getAllThreads();
  }

  getAllThreads(){
    this.threadsService.getAll()
      .then(threads => {
        this.threads = threads;
      })
      .catch( error => {
        console.error( error );
      });
  }

  openAlertNewThread() {
    let prompt = this.alertCtrl.create({
      title: 'Create new thread',
      message: "Enter a topic or question you would like to talk about",
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
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            console.log(data.title);
            //this.addThread(data.title);
            data.topic = "living";
            this.threadsService.create(data)
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
    this.threadsService.update(thread)
      .then( response => {
        this.threads[index] = thread;
      })
      .catch( error => {
        console.error( error );
      })
  }

  deleteThread(thread: any, index){
    this.threadsService.delete(thread)
      .then(response => {
        console.log( response );
        this.threads.splice(index, 1);
      })
      .catch( error => {
        console.error( error );
      })
  }
}
