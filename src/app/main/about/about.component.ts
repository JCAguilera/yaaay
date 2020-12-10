import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import localize from "nativescript-localize";

@Component({
  selector: "ns-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  moduleId: module.id,
})
export class AboutComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  getAbout() {
    return localize("about_content").split("\n");
  }

  goBack() {
    this._router.navigate(["home"]);
    return;
  }
}
