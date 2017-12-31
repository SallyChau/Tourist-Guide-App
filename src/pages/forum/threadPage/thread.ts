import { Component } from '@angular/core';
import { NavParams } from "ionic-angular";
import { ThreadsServiceProvider } from "../../../providers/threads-service/threads-service";

@Component({
  selector: 'page-thread',
  templateUrl: 'thread.html'
})

export class ThreadPage {

  title = null;
  answers: any[] = [];
  thread: any = null;
  answer = null;

  constructor(public navParam: NavParams,
              public threadsService: ThreadsServiceProvider){

  }

  ionViewDidLoad(){
    this.thread = this.navParam.data[0];
    this.title = this.thread.title;
    this.getAllAnswers();
  }

  getAllAnswers(){
    this.threadsService.getAllAnswersWithThreadID(this.thread.id)
      .then(answers => {
        this.answers = answers;
      })
      .catch( error => {
        console.error( error );
      });
  }

  submit(){
    let data = {};
    data["topic"] = this.thread.topic;
    data["threadID"] = this.thread.id;
    data["title"] = this.answer;

    this.threadsService.createAnswer(data)
      .then(response => {
        this.answers.unshift(data);
      })
      .catch(error => {
        console.error(error);
      })

    this.answer = null;
  }
}
