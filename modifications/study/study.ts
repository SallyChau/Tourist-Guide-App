import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CampusPage } from "./campus/campus";
import {CoursePage} from "./course/course";
import {SpanishPage} from "./spanish/spanish";

@Component({
  selector: 'page-study',
  templateUrl: 'study.html'
})
export class StudyPage {

  constructor(public navCtrl: NavController){

  }
  openCampusPage(){
    this.navCtrl.setRoot(CampusPage);
  }

  openCoursePage(){
    this.navCtrl.setRoot(CoursePage);
  }

  openSpanishPage(){
    this.navCtrl.setRoot(SpanishPage);
  }
}
