"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var utils = require("utils/utils");
var application_settings_1 = require("application-settings");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, _page) {
        this.router = router;
        this._page = _page;
        this.appVer = '1.1';
        this.aboutTitle = 'Acerca de YAAAY! ' + this.appVer;
        this.about = "Creada con amor por Juanky.\nYAAAY! es una demo de aplicaci\u00F3n nativa usando Nativescript + Angular 5.\nLa fuente est\u00E1 disponible en GitHub bajo la licencia MIT.\nTambi\u00E9n disponible una versi\u00F3n hecha con AndroidStudio.";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.githubIcon = String.fromCharCode(0xf09b);
        this.sliderValue = application_settings_1.getNumber('vibTime', 2000);
        this.labelContent = this.sliderValue + 'ms';
        this.vibrationActivated = application_settings_1.getBoolean('vibChk', true);
        this.spamModeActivated = application_settings_1.getBoolean('spamChk', false);
        var yaaayTimes = application_settings_1.getNumber('yaaayTimes', 0);
        if (yaaayTimes === 0) {
            this.stadistics = 'No has hecho YAAAY!. ¿No tienes nada que celebrar?';
        }
        else {
            var times = yaaayTimes === 1 ? ' vez' : ' veces';
            this.stadistics = 'Has hecho YAAAY! ' + yaaayTimes + times + '.';
        }
    };
    SettingsComponent.prototype.onSliderValueChanged = function (event) {
        this.sliderValue = event['value'];
        this.labelContent = this.sliderValue + 'ms';
        application_settings_1.setNumber('vibTime', +this.sliderValue);
    };
    SettingsComponent.prototype.toggleCheck = function (event, chk) {
        application_settings_1.setBoolean(chk, event['value']);
    };
    SettingsComponent.prototype.goToGithub = function () {
        utils.openUrl("https://github.com/JCAguilera/yaaay");
    };
    SettingsComponent.prototype.goBack = function () {
        this.router.navigate(['main']);
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'ns-settings',
            moduleId: module.id,
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5QztBQUN6QyxzREFBZ0U7QUFFaEUsbUNBQXFDO0FBQ3JDLDZEQUFvRjtBQVFwRjtJQWVJLDJCQUFvQixNQUFjLEVBQVUsS0FBVztRQUFuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQU52RCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0MsVUFBSyxHQUFHLCtPQUEyTixDQUFDO0lBSTFLLENBQUM7SUFFM0Qsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlDQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQ0FBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFNLFVBQVUsR0FBRyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUEsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLG9EQUFvRCxDQUFDO1FBQzNFLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQU0sS0FBSyxHQUFHLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLEdBQUcsVUFBVSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7SUFFRCxnREFBb0IsR0FBcEIsVUFBcUIsS0FBVTtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVDLGdDQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksS0FBVSxFQUFFLEdBQVc7UUFDL0IsaUNBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWhEUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQzFDLENBQUM7eUNBZ0I4QixlQUFNLEVBQWlCLFdBQUk7T0FmOUMsaUJBQWlCLENBaUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBDb21wb25lbnQsIE9uQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBnZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldEJvb2xlYW4sIHNldE51bWJlciB9IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1zZXR0aW5ncycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3NldHRpbmdzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHNsaWRlclZhbHVlOiBudW1iZXI7XHJcbiAgICBsYWJlbENvbnRlbnQ6IHN0cmluZztcclxuICAgIHZpYnJhdGlvbkFjdGl2YXRlZDogYm9vbGVhbjtcclxuICAgIHNwYW1Nb2RlQWN0aXZhdGVkOiBib29sZWFuO1xyXG5cclxuICAgIHN0YWRpc3RpY3M6IHN0cmluZztcclxuXHJcbiAgICBhcHBWZXIgPSAnMS4xJztcclxuICAgIGFib3V0VGl0bGUgPSAnQWNlcmNhIGRlIFlBQUFZISAnICsgdGhpcy5hcHBWZXI7XHJcbiAgICBhYm91dCA9IGBDcmVhZGEgY29uIGFtb3IgcG9yIEp1YW5reS5cXG5ZQUFBWSEgZXMgdW5hIGRlbW8gZGUgYXBsaWNhY2nDs24gbmF0aXZhIHVzYW5kbyBOYXRpdmVzY3JpcHQgKyBBbmd1bGFyIDUuXFxuTGEgZnVlbnRlIGVzdMOhIGRpc3BvbmlibGUgZW4gR2l0SHViIGJham8gbGEgbGljZW5jaWEgTUlULlxcblRhbWJpw6luIGRpc3BvbmlibGUgdW5hIHZlcnNpw7NuIGhlY2hhIGNvbiBBbmRyb2lkU3R1ZGlvLmA7XHJcbiAgICBcclxuICAgIGdpdGh1Ykljb246IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9wYWdlOiBQYWdlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2l0aHViSWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDliKTtcclxuICAgICAgICB0aGlzLnNsaWRlclZhbHVlID0gZ2V0TnVtYmVyKCd2aWJUaW1lJywgMjAwMCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbENvbnRlbnQgPSB0aGlzLnNsaWRlclZhbHVlICsgJ21zJztcclxuICAgICAgICB0aGlzLnZpYnJhdGlvbkFjdGl2YXRlZCA9IGdldEJvb2xlYW4oJ3ZpYkNoaycsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc3BhbU1vZGVBY3RpdmF0ZWQgPSBnZXRCb29sZWFuKCdzcGFtQ2hrJywgZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IHlhYWF5VGltZXMgPSBnZXROdW1iZXIoJ3lhYWF5VGltZXMnLCAwKTtcclxuICAgICAgICBpZih5YWFheVRpbWVzID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFkaXN0aWNzID0gJ05vIGhhcyBoZWNobyBZQUFBWSEuIMK/Tm8gdGllbmVzIG5hZGEgcXVlIGNlbGVicmFyPyc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzID0geWFhYXlUaW1lcyA9PT0gMSA/ICcgdmV6JyA6ICcgdmVjZXMnO1xyXG4gICAgICAgICAgICB0aGlzLnN0YWRpc3RpY3MgPSAnSGFzIGhlY2hvIFlBQUFZISAnICsgeWFhYXlUaW1lcyArIHRpbWVzICsgJy4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNsaWRlclZhbHVlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJWYWx1ZSA9IGV2ZW50Wyd2YWx1ZSddO1xyXG4gICAgICAgIHRoaXMubGFiZWxDb250ZW50ID0gdGhpcy5zbGlkZXJWYWx1ZSArICdtcyc7XHJcbiAgICAgICAgc2V0TnVtYmVyKCd2aWJUaW1lJywgK3RoaXMuc2xpZGVyVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNoZWNrKGV2ZW50OiBhbnksIGNoazogc3RyaW5nKSB7XHJcbiAgICAgICAgc2V0Qm9vbGVhbihjaGssIGV2ZW50Wyd2YWx1ZSddKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvR2l0aHViKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL2dpdGh1Yi5jb20vSkNBZ3VpbGVyYS95YWFheVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydtYWluJ10pO1xyXG4gICAgfVxyXG59Il19