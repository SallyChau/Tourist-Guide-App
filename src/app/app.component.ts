import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from "@ionic-native/sqlite";
import { BucketlistServiceProvider } from "../providers/bucketlist-service/bucketlist-service";
import { ThreadsServiceProvider } from "../providers/threads-service/threads-service";

import { HomePage } from '../pages/home/home';
import { TravelPage } from '../pages/travel/travel';
import { LivePage} from '../pages/live/live';
import { StudyPage} from '../pages/study/study';
import { ForumPage} from '../pages/forum/forum';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  protected rootPage: any = HomePage;

  protected pages: Array<{title: string, component: any}>;

  constructor(protected platform: Platform,
              protected statusBar: StatusBar,
              protected splashScreen: SplashScreen,
              protected threadsService: ThreadsServiceProvider,
              protected bucketlistService: BucketlistServiceProvider,
              protected sqlite: SQLite) {

    this.initializeApp();

    // used for navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Travelling', component: TravelPage },
      { title: 'Living', component: LivePage },
      { title: 'Studying', component: StudyPage },
      { title: 'Forum', component: ForumPage }
    ];

  }

  protected initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createDatabase();
    });
  }

  protected openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
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
