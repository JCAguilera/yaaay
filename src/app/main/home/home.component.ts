import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from "@angular/core";
import {
  Enums,
  Page,
  Switch,
  Application,
  Utils,
  Device,
  ApplicationSettings,
  Button,
  Color,
} from "@nativescript/core";
import { Router } from "@angular/router";
import { TNSPlayer } from "nativescript-audio-player";
import { Vibrate } from "nativescript-vibrate";

const { getNumber, setNumber, getBoolean, setBoolean } = ApplicationSettings;
declare var android: any;

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  button: Button;

  _player: TNSPlayer;
  _vibrator: Vibrate;
  yaaayTimes: number;

  constructor(
    private _page: Page,
    private router: Router,
    private _changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.yaaayTimes = getNumber("yaaayTimes", 0);
    this._player = new TNSPlayer();
    this._vibrator = new Vibrate();
    this._page.actionBarHidden = true;
    this._page.statusBarColor = new Color("white");
    this._page.navigationBarColor = new Color("white");
    this._player.initFromFile({
      audioFile: `~/app/res/yay.mp3`, // ~ = app directory
      loop: false,
    });
  }

  ngAfterViewInit() {
    this._changeDetectionRef.detectChanges();
  }

  onGridLoaded(args): void {
    this.button = args.object.getViewById("yaaay-btn");
    this.button.animate({ scale: { x: 0.8, y: 0.8 }, duration: 0 });
  }

  onYaaayBtnTouch(ev) {
    if (ev.action === "down") {
      this.button.animate({ scale: { x: 0.7, y: 0.7 }, duration: 100 });
    } else if (ev.action === "up") {
      this.doYaaay();
      this.button.animate({ scale: { x: 1, y: 1 }, duration: 100 }).then(() =>
        this.button.animate({
          scale: { x: 0.8, y: 0.8 },
          curve: Enums.AnimationCurve.spring,
        })
      );
    }
  }

  doYaaay(): void {
    if (this._player.isAudioPlaying()) {
      this._player.seekTo(0);
    } else {
      this._player.play();
    }
    if (getBoolean("vibChk", true)) {
      this._vibrator.vibrate(200);
    }
    if (getBoolean("counterChk", true)) {
      this.yaaayCounter();
    }
  }

  private yaaayCounter(): void {
    this.yaaayTimes++;
    setNumber("yaaayTimes", this.yaaayTimes);
  }

  getYaaayCounter(): string {
    var yaaayTimes = getNumber("yaaayTimes", 0);
    if (yaaayTimes === 0) {
      return "no_yaaays";
    } else {
      return yaaayTimes === 1 ? "one_yaaay" : "more_yaaays";
    }
  }

  getYaaayCount(): number {
    return getNumber("yaaayTimes", 0);
  }

  openUrl(url: string): void {
    Utils.openUrl(url);
  }

  toggleSetting(setting: string, args) {
    var checked = (<Switch>args.object).checked;
    setBoolean(setting, checked);
  }

  getSetting(setting: string): boolean {
    return getBoolean(setting, true);
  }

  onAboutButtonPress() {
    this.router.navigate(["about"]);
    return;
  }

  onChangelogButtonPress() {
    this.router.navigate(["changelog"]);
    return;
  }
}
