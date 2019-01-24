import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { Page } from "tns-core-modules/ui/page/page";
import { Router } from "@angular/router";
import { getBoolean, getNumber, setNumber, setBoolean } from 'application-settings';
import { TNSPlayer } from 'nativescript-audio-player';
import { Vibrate } from 'nativescript-vibrate'
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Switch } from "tns-core-modules/ui/switch";
import * as app from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
import * as utils from "utils/utils";

declare var android: any;

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;
  button;

  _player: TNSPlayer;
  _vibrator: Vibrate;
  yaaayTimes: number;

  constructor(
    private _page: Page,
    private router: Router,
    private _changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.yaaayTimes = getNumber('yaaayTimes', 0);
    this._player = new TNSPlayer();
    this._vibrator = new Vibrate();
    this._page.actionBarHidden = true;
    this._player.initFromFile({
      audioFile: `~/app/res/yay.mp3`, // ~ = app directory
      loop: false
    });
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  onGridLoaded(args): void {
    var window = app.android.startActivity.getWindow();
    var View = android.view.View;
    if (app.android && platform.device.sdkVersion >= '21') {
      var window = app.android.startActivity.getWindow();
      window.setStatusBarColor(0x000000);
      window.setNavigationBarColor(0x000000);
      var decorView = window.getDecorView();
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR
      );
    }
    this.button = args.object.getViewById("yaaay-btn");
    this.button.animate({ scale: { x: 0.8, y: 0.8 }, duration: 0 });
  }

  onYaaayBtnTouch(ev) {
    if (ev.action === 'down') {
      this.button.animate({ scale: { x: 0.7, y: 0.7 }, duration: 100 });
    } else if (ev.action === 'up') {
      this.doYaaay();
      this.button.animate({ scale: { x: 1, y: 1 }, duration: 100 })
        .then(() => this.button.animate({ scale: { x: 0.8, y: 0.8 }, curve: AnimationCurve.spring }));
    }
  }

  doYaaay(): void {
    if (this._player.isAudioPlaying()) { this._player.seekTo(0); }
    else { this._player.play(); }
    if (getBoolean('vibChk', true)) { this._vibrator.vibrate(200); }
    if (getBoolean('counterChk', true)) { this.yaaayCounter(); }
  }

  private yaaayCounter(): void {
    this.yaaayTimes++;
    setNumber('yaaayTimes', this.yaaayTimes);
  }

  getYaaayCounter(): string {
    var yaaayTimes = getNumber('yaaayTimes', 0);
    if (yaaayTimes === 0){ return 'no_yaaays'; }
    else { return yaaayTimes === 1 ? 'one_yaaay' : 'more_yaaays'; }
  }

  getYaaayCount(): number {
    return getNumber('yaaayTimes', 0);
  }

  openUrl(url: string): void {
    utils.openUrl(url);
  }

  openDrawer() {
    this.drawer.showDrawer();
  }

  toggleSetting(setting: string, args) {
    var checked = (<Switch>args.object).checked;
    setBoolean(setting, checked);
  }

  getSetting(setting: string): boolean {
    return getBoolean(setting, true);
  }

  onAboutButtonPress() {
    this.router.navigate(['about']); return;
  }

  onChangelogButtonPress() {
    this.router.navigate(['changelog']); return;
  }

  onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }

}
