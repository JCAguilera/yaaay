import { ChangelogItem } from "./ChangelogItem";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { localize } from "@nativescript/localize";
import * as moment from "moment";
import { ChangelogService } from "./changelog.service";
import { Device } from "@nativescript/core";

@Component({
  selector: "ns-changelog",
  templateUrl: "./changelog.component.html",
  styleUrls: ["./changelog.component.css"],
  moduleId: module.id,
})
export class ChangelogComponent implements OnInit {
  lang = "en";
  changelog: ChangelogItem[];
  monthNames: string[];

  constructor(
    private _changelogService: ChangelogService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.changelog = this._changelogService.changelog;
    this.monthNames = localize(`months`).split(".");
    const currentLang = Device.language.split("-")[0];
    this.lang = ["es", "en"].includes(currentLang) ? currentLang : "en";
  }

  formatTranslation(content: { [key: string]: string[] }) {
    return content[this.lang];
  }

  formatDate(dateStr: string) {
    const date = moment(dateStr).toDate();

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + " " + this.monthNames[monthIndex] + " " + year;
  }

  goBack() {
    this._router.navigate(["home"]);
    return;
  }
}
