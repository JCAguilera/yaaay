import { knownFolders } from "@nativescript/core";
import { Injectable } from "@angular/core";
import { ChangelogItem } from "./ChangelogItem";

@Injectable({ providedIn: "root" })
export class ChangelogService {
  private _changelog: ChangelogItem[];

  constructor() {
    const folder = knownFolders.currentApp();
    const content = folder.getFile("assets/changelog.json").readTextSync();
    this._changelog = JSON.parse(content);
  }

  get changelog() {
    return this._changelog.slice();
  }
}
