import { Injectable } from '@angular/core';
import { SQLiteObject } from "@ionic-native/sqlite";

/*
  Generated class for the ThreadsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ThreadsServiceProvider {

  db: SQLiteObject = null;

  constructor() {

  }

  setDatabase(db: SQLiteObject){
    if (this.db === null ){
      this.db = db;
    }
  }

  createTable(){
    this.createThreadTable();
    this.createAnswerTable();
  }

  createThreadTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS threads(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, topic TEXT, date TEXT)';
    return this.db.executeSql(sql, []);
  }

  createAnswerTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS threadAnswers(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, threadID INTEGER, topic TEXT, date TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAllThreads(){
    let sql = 'SELECT * FROM threads';
    return this.db.executeSql(sql, [])
      .then(response => {
        let threads = [];
        for (let index = 0; index < response.rows.length; index++) {
          threads.push( response.rows.item(index) );
        }
        return Promise.resolve( threads );
      })
      .catch(error => Promise.reject(error));
  }

  getAllThreadsWithTag(tag:String){
    let sql = 'SELECT * FROM threads WHERE topic=?';
    return this.db.executeSql(sql, [tag])
      .then(response => {
        let threads = [];
        for (let index = 0; index < response.rows.length; index++) {
          threads.push( response.rows.item(index) );
        }
        return Promise.resolve( threads );
      })
      .catch(error => Promise.reject(error));
  }

  createThread(thread: any){
    let sql = 'INSERT INTO threads(title, topic, date) VALUES(?,?,?)';
    return this.db.executeSql(sql, [thread.title, thread.topic, thread.date]);
  }

  updateThread(thread: any){
    let sql = 'UPDATE threads SET title=?, topic=? WHERE id=?';
    return this.db.executeSql(sql, [thread.title, thread.topic, thread.id]);
  }

  deleteThread(thread: any){
    let sql = 'DELETE FROM threads WHERE id=?';
    return this.db.executeSql(sql, [thread.id]);
  }

  // Answers

  getAllAnswers(){
    let sql = 'SELECT * FROM threadAnswers';
    return this.db.executeSql(sql, [])
      .then(response => {
        let threads = [];
        for (let index = 0; index < response.rows.length; index++) {
          threads.push( response.rows.item(index) );
        }
        return Promise.resolve( threads );
      })
      .catch(error => Promise.reject(error));
  }

  getAllAnswersWithThreadID(id:number){
    let sql = 'SELECT * FROM threadAnswers WHERE threadID=?';
    return this.db.executeSql(sql, [id])
      .then(response => {
        let threads = [];
        for (let index = 0; index < response.rows.length; index++) {
          threads.push( response.rows.item(index) );
        }
        return Promise.resolve( threads );
      })
      .catch(error => Promise.reject(error));
  }

  createAnswer(answer: any){
    let sql = 'INSERT INTO threadAnswers(title, threadID, topic, date) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, [answer.title, answer.threadID, answer.topic, answer.date]);
  }

  updateAnswer(answer: any){
    let sql = 'UPDATE threadAnswers SET title=?, topic=? WHERE id=?';
    return this.db.executeSql(sql, [answer.title, answer.topic, answer.id]);
  }

  deleteAnswer(answer: any){
    let sql = 'DELETE FROM threadAnswers WHERE threadID=?';
    return this.db.executeSql(sql, [answer.threadID]);
  }

}
