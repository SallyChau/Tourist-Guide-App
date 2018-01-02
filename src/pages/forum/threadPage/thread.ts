import { Component } from '@angular/core';
import {AlertController, NavParams} from "ionic-angular";
import { ThreadsServiceProvider } from "../../../providers/threads-service/threads-service";

@Component({
  selector: 'page-thread',
  templateUrl: 'thread.html'
})

export class ThreadPage {

  protected title = null;
  protected answers: any[] = [];
  protected thread: any = null;
  protected answer = null;

  constructor(private navParam: NavParams,
              private alertCtrl: AlertController,
              private threadsService: ThreadsServiceProvider){

  }

  private ionViewDidLoad(){
    this.thread = this.navParam.data[0];
    this.title = this.thread.title;
    this.getAllAnswers();
  }

  private getAllAnswers(){
    this.threadsService.getAllAnswersWithThreadID(this.thread.id)
      .then(answers => {
        this.answers = answers;
      })
      .catch( error => {
        console.error( error );
      });
  }

  protected submit(){
    if (this.answer == null) {
      this.emptyAnswerAlert();
    } else {
      let data = {};
      data["topic"] = this.thread.topic;
      data["threadID"] = this.thread.id;
      data["title"] = this.answer;
      var date = new Date();
      var month = date.getMonth() + 1;
      data["date"] = date.getFullYear().toString() + "-" +
        month.toString() + "-" +
        date.getDate().toString() + " " +
        date.getHours().toString() + ":" +
        date.getMinutes().toString() + ":" +
        date.getSeconds().toString();

      this.threadsService.createAnswer(data)
        .then(response => {
          this.answers.unshift(data);
        })
        .catch(error => {
          console.error(error);
        });

      this.getAllAnswers();

      this.answer = null;
    }
  }

  private emptyAnswerAlert() {
    let alert = this.alertCtrl.create({
      title: 'Empty answer',
      subTitle: 'Please enter an answer to participcate in this discussion.',
      buttons: ['OK']
    });
    alert.present();
  }
}
