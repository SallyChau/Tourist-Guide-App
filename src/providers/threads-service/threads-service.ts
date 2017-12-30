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
    let sql = 'CREATE TABLE IF NOT EXISTS threads(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, topic TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
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

  create(thread: any){
    let sql = 'INSERT INTO threads(title, topic) VALUES(?,?)';
    return this.db.executeSql(sql, [thread.title, thread.topic]);
  }

  update(thread: any){
    let sql = 'UPDATE threads SET title=?, topic=? WHERE id=?';
    return this.db.executeSql(sql, [thread.title, thread.topic, thread.id]);
  }

  delete(thread: any){
    let sql = 'DELETE FROM threads WHERE id=?';
    return this.db.executeSql(sql, [thread.id]);
  }

}
