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
    BusPage
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
    BusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
