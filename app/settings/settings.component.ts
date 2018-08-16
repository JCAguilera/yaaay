import { OnInit, Component, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import { Page, EventData } from "tns-core-modules/ui/page/page";
import { Slider } from 'tns-core-modules/ui/slider/slider';
import * as utils from "utils/utils";
import { getBoolean, getNumber, setBoolean, setNumber } from 'application-settings';

@Component({
    selector: 'ns-settings',
    moduleId: module.id,
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    sliderValue: number;
    labelContent: string;
    vibrationActivated: boolean;
    spamModeActivated: boolean;

    stadistics: string;

    appVer = '1.3';
    aboutTitle = 'Acerca de YAAAY! ' + this.appVer;
    about = `Hecho con amor por Juanky.\nYAAAY! es una demo de aplicación nativa usando Nativescript + Angular.\nLa fuente está disponible en GitHub bajo la licencia MIT.\nTambién disponible una versión hecha con AndroidStudio.`;
    
    githubIcon: string;

    constructor(private router: Router, private _page: Page) {}

    ngOnInit() {
        this.githubIcon = String.fromCharCode(0xf09b);
        this.sliderValue = getNumber('vibTime', 2000);
        this.labelContent = this.sliderValue + 'ms';
        this.vibrationActivated = getBoolean('vibChk', true);
        this.spamModeActivated = getBoolean('spamChk', false);
        const yaaayTimes = getNumber('yaaayTimes', 0);
        if(yaaayTimes === 0){
            this.stadistics = 'No has hecho YAAAY!. ¿No tienes nada que celebrar?';
        }else{
            const times = yaaayTimes === 1 ? ' vez' : ' veces';
            this.stadistics = 'Has hecho YAAAY! ' + yaaayTimes + times + '.';
        }
    }

    onSliderValueChanged(event: any) {
        this.sliderValue = event['value'];
        this.labelContent = this.sliderValue + 'ms';
        setNumber('vibTime', +this.sliderValue);
    }

    toggleCheck(event: any, chk: string) {
        setBoolean(chk, event['value']);
    }

    goToGithub() {
        utils.openUrl("https://github.com/JCAguilera/yaaay");
    }

    goBack() {
        this.router.navigate(['main']);
    }
}