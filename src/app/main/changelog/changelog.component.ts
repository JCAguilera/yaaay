import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { localize } from "nativescript-localize";
import * as platform from "tns-core-modules/platform";

@Component({
  selector: "ns-changelog",
  templateUrl: "./changelog.component.html",
  styleUrls: ["./changelog.component.css"],
  moduleId: module.id,
})
export class ChangelogComponent implements OnInit {
  constructor(private _router: Router) {}

  changelog = [
    { title: "1.5", date: new Date(2019, 0, 24), content: `1.5` },
    { title: "1.4", date: new Date(2018, 7, 16), content: `1.4` },
    { title: "1.3", date: new Date(2018, 4, 16), content: `1.3` },
    { title: "1.2", date: new Date(2018, 4, 14), content: `1.2` },
    { title: "1.1", date: new Date(2018, 4, 12), content: `1.1` },
    { title: "Alpha 1", date: new Date(2018, 4, 6), content: `alpha-1` },
    {
      title: "Archirecontra Pre-Alpha 1",
      date: new Date(2018, 4, 6),
      content: `pre-alpha-1`,
    },
  ];

  ngOnInit() {}

  formatTranslation(key: string) {
    return localize(`changelog_${key}`).split("\n");
  }

  formatDate(date: Date) {
    var monthNames = localize(`months`).split(".");

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }

  goBack() {
    this._router.navigate(["home"]);
    return;
  }
}
