import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { Router } from "@angular/router";
import { getBoolean, getNumber, setNumber } from 'application-settings';
import { TNSPlayer } from 'nativescript-audio';
import { Vibrate } from 'nativescript-vibrate'

@Component({
    selector: "ns-main",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

    _player: TNSPlayer;
    _vibrator: Vibrate;
    yaaayTimes: number;

    constructor(private _page: Page, private router: Router) {}

    ngOnInit(): void {
        this.yaaayTimes = getNumber('yaaayTimes', 0);
        this._player = new TNSPlayer();
        this._vibrator = new Vibrate();
        this._page.actionBarHidden = true;
        this._player.initFromFile({
            // `${fs.knownFolders.currentApp().path}/path-to-webview-content.html`
            audioFile: `~/res/yay.mp3`, // ~ = app directory
            loop: false
        });
    }

    onSettingsButtonTap(): void {
        this.router.navigate(['settings']);
    }

    onYaayButtonTap(): void {
        setNumber('yaaayTimes', this.yaaayTimes+1);
        if (this._player.isAudioPlaying()){
            if(getBoolean('spamChk', false)){
                this._player.seekTo(0);
            }
        }else{
            this._player.play();
        }
        if(getBoolean('vibChk', true)){
            this._vibrator.vibrate(getNumber('vibTime', 2000));
        }
    }

}