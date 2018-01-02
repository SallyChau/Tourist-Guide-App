import { Component } from '@angular/core';
import {BucketlistServiceProvider} from "../../../providers/bucketlist-service/bucketlist-service";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'page-bucketlist',
  templateUrl: 'bucketlist.html'
})
export class BucketlistPage {

  protected tasks: any[] = [];

  constructor(protected alertCtrl: AlertController,
              protected bucketlistService: BucketlistServiceProvider) {

  }

  public ionViewDidLoad(){
    this.getAllTasks();
  }

  public ionViewDidEnter(){
    this.getAllTasks();
  }

  public getAllTasks(){
    this.bucketlistService.getAll()
      .then(tasks => {
        this.tasks = tasks;
      })
      .catch( error => {
        console.error( error );
      });
  }

  public openAlertNewTask() {
    let prompt = this.alertCtrl.create({
      title: 'Add a new task',
      message: "Add a task to your personal bucketlist.",
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
            data.completed = false;
            this.bucketlistService.create(data)
              .then(response => {
                this.tasks.unshift(data);
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

  public createTask(title: String) {
    let task = {title: title, completed: false};
    this.bucketlistService.create(task)
      .then(response => {
        this.tasks.unshift(task);
      })
      .catch(error => {
        console.error(error);
      })
  }

  public updateTask(task, index){
    task = Object.assign({}, task);
    task.completed = !task.completed;
    this.bucketlistService.update(task)
      .then( response => {
        this.tasks[index] = task;
      })
      .catch( error => {
        console.error( error );
      });
  }

  public deleteTask(thread: any, index){
    this.bucketlistService.delete(thread)
      .then(response => {
        console.log( response );
        this.tasks.splice(index, 1);
      })
      .catch( error => {
        console.error( error );
      })
  }
}
