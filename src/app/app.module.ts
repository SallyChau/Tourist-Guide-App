import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TravelPage } from '../pages/travel/travel';
import { NaturePage } from "../pages/travel/nature/nature";
import { LivePage } from '../pages/live/live';
import { StudyPage } from '../pages/study/study';
import { ForumPage} from '../pages/forum/forum';
import { ShopsPage } from "../pages/travel/shops/shops";
import { OverviewPage } from "../pages/travel/overview/overview";
import { BucketlistPage } from "../pages/travel/bucketlist/bucketlist";
import { SightsPage } from "../pages/travel/sights/sights";
import { NiePage } from "../pages/live/nie/nie";
import { AccomodationPage } from "../pages/live/accomodation/accomodation";
import { BusPage } from "../pages/live/bus/bus";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LiveforumPage} from "../pages/forum/liveforum/liveforum";
import { TravelforumPage } from "../pages/forum/travelforum/travelforum";
import { StudyforumPage } from "../pages/forum/studyforum/studyforum";
import { SQLite } from "@ionic-native/sqlite";
import { ThreadsServiceProvider } from '../providers/threads-service/threads-service';
import { BucketlistServiceProvider } from '../providers/bucketlist-service/bucketlist-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TravelPage,
    NaturePage,
    ShopsPage,
    LivePage,
    StudyPage,
    ForumPage,
    OverviewPage,
    BucketlistPage,
    SightsPage,
    NiePage,
    AccomodationPage,
    BusPage,
    LiveforumPage,
    TravelforumPage,
    StudyforumPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TravelPage,
    NaturePage,
    ShopsPage,
    LivePage,
    StudyPage,
    ForumPage,
    OverviewPage,
    BucketlistPage,
    SightsPage,
    NiePage,
    AccomodationPage,
    BusPage,
    LiveforumPage,
    TravelforumPage,
    StudyforumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ThreadsServiceProvider,
    BucketlistServiceProvider
  ]
})
export class AppModule {}
