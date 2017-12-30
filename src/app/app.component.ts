import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from "@ionic-native/sqlite";
import { ThreadsServiceProvider } from "../providers/threads-service/threads-service";

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TravelPage } from '../pages/travel/travel';
import { LivePage} from '../pages/live/live';
import { StudyPage} from '../pages/study/study';
import { ForumPage} from '../pages/forum/forum';
import {BucketlistServiceProvider} from "../providers/bucketlist-service/bucketlist-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public threadsService: ThreadsServiceProvider,
              public bucketlistService: BucketlistServiceProvider,
              private sqlite: SQLite) {

    this.initializeApp();

    // used for navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Travelling', component: TravelPage },
      { title: 'Living', component: LivePage },
      { title: 'Studying', component: StudyPage },
      { title: 'Forum', component: ForumPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createDatabase();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  private createDatabase(){
    this.sqlite.create({
      name: 'dwdm.db',
      location: 'default'
    })
      .then((db) => {
        this.threadsService.setDatabase(db);
        this.threadsService.createTable();

        this.bucketlistService.setDatabase(db);
        this.bucketlistService.createTable();
      })
      .catch(error =>{
        console.error(error);
      });
  }
}
