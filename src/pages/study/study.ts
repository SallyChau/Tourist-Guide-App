import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CampusPage } from "./campus/campus";
import { CoursePage } from "./course/course";
import { SpanishPage } from "./spanish/spanish";

@Component({
  selector: 'page-study',
  templateUrl: 'study.html'
})
export class StudyPage {

  constructor(protected navCtrl: NavController){

  }

  protected openCampusPage(){
    this.navCtrl.push(CampusPage);
  }

  protected openCoursePage(){
    this.navCtrl.push(CoursePage);
  }

  protected openSpanishPage(){
    this.navCtrl.push(SpanishPage);
  }
}
