import { Component } from '@angular/core';
import {BucketlistServiceProvider} from "../../../providers/bucketlist-service/bucketlist-service";

@Component({
  selector: 'page-bucketlist',
  templateUrl: 'bucketlist.html'
})
export class BucketlistPage {

  tasks: any[] = [];

  constructor(public bucketlistService: BucketlistServiceProvider) {

  }

  ionViewDidLoad(){
    this.getAllTasks();
  }

  getAllTasks(){
    this.bucketlistService.getAll()
      .then(tasks => {
        this.tasks = tasks;
      })
      .catch( error => {
        console.error( error );
      });
  }

  createTask(title: String) {
    let task = {title: title, completed: false};
    this.bucketlistService.create(task)
      .then(response => {
        this.tasks.unshift(task);
      })
      .catch(error => {
        console.error(error);
      })
  }

  updateTask(task, index){
    task = Object.assign({}, task);
    this.bucketlistService.update(task)
      .then( response => {
        this.tasks[index] = task;
      })
      .catch( error => {
        console.error( error );
      })
  }

  deleteTask(thread: any, index){
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
