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
        this.about = "Hecho con amor por Juanky.\nYAAAY! es una demo de aplicaci\u00F3n nativa usando Nativescript + Angular 5.\nLa fuente est\u00E1 disponible en GitHub bajo la licencia MIT.\nTambi\u00E9n disponible una versi\u00F3n hecha con AndroidStudio.";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5QztBQUN6QyxzREFBZ0U7QUFFaEUsbUNBQXFDO0FBQ3JDLDZEQUFvRjtBQVFwRjtJQWVJLDJCQUFvQixNQUFjLEVBQVUsS0FBVztRQUFuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQU52RCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0MsVUFBSyxHQUFHLDhPQUEwTixDQUFDO0lBSXpLLENBQUM7SUFFM0Qsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlDQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQ0FBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFNLFVBQVUsR0FBRyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUEsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLG9EQUFvRCxDQUFDO1FBQzNFLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQU0sS0FBSyxHQUFHLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLEdBQUcsVUFBVSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7SUFFRCxnREFBb0IsR0FBcEIsVUFBcUIsS0FBVTtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVDLGdDQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksS0FBVSxFQUFFLEdBQVc7UUFDL0IsaUNBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWhEUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQzFDLENBQUM7eUNBZ0I4QixlQUFNLEVBQWlCLFdBQUk7T0FmOUMsaUJBQWlCLENBaUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBDb21wb25lbnQsIE9uQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBnZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldEJvb2xlYW4sIHNldE51bWJlciB9IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1zZXR0aW5ncycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3NldHRpbmdzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHNsaWRlclZhbHVlOiBudW1iZXI7XHJcbiAgICBsYWJlbENvbnRlbnQ6IHN0cmluZztcclxuICAgIHZpYnJhdGlvbkFjdGl2YXRlZDogYm9vbGVhbjtcclxuICAgIHNwYW1Nb2RlQWN0aXZhdGVkOiBib29sZWFuO1xyXG5cclxuICAgIHN0YWRpc3RpY3M6IHN0cmluZztcclxuXHJcbiAgICBhcHBWZXIgPSAnMS4xJztcclxuICAgIGFib3V0VGl0bGUgPSAnQWNlcmNhIGRlIFlBQUFZISAnICsgdGhpcy5hcHBWZXI7XHJcbiAgICBhYm91dCA9IGBIZWNobyBjb24gYW1vciBwb3IgSnVhbmt5LlxcbllBQUFZISBlcyB1bmEgZGVtbyBkZSBhcGxpY2FjacOzbiBuYXRpdmEgdXNhbmRvIE5hdGl2ZXNjcmlwdCArIEFuZ3VsYXIgNS5cXG5MYSBmdWVudGUgZXN0w6EgZGlzcG9uaWJsZSBlbiBHaXRIdWIgYmFqbyBsYSBsaWNlbmNpYSBNSVQuXFxuVGFtYmnDqW4gZGlzcG9uaWJsZSB1bmEgdmVyc2nDs24gaGVjaGEgY29uIEFuZHJvaWRTdHVkaW8uYDtcclxuICAgIFxyXG4gICAgZ2l0aHViSWNvbjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3BhZ2U6IFBhZ2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5naXRodWJJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwOWIpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyVmFsdWUgPSBnZXROdW1iZXIoJ3ZpYlRpbWUnLCAyMDAwKTtcclxuICAgICAgICB0aGlzLmxhYmVsQ29udGVudCA9IHRoaXMuc2xpZGVyVmFsdWUgKyAnbXMnO1xyXG4gICAgICAgIHRoaXMudmlicmF0aW9uQWN0aXZhdGVkID0gZ2V0Qm9vbGVhbigndmliQ2hrJywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zcGFtTW9kZUFjdGl2YXRlZCA9IGdldEJvb2xlYW4oJ3NwYW1DaGsnLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgeWFhYXlUaW1lcyA9IGdldE51bWJlcigneWFhYXlUaW1lcycsIDApO1xyXG4gICAgICAgIGlmKHlhYWF5VGltZXMgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWRpc3RpY3MgPSAnTm8gaGFzIGhlY2hvIFlBQUFZIS4gwr9ObyB0aWVuZXMgbmFkYSBxdWUgY2VsZWJyYXI/JztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgdGltZXMgPSB5YWFheVRpbWVzID09PSAxID8gJyB2ZXonIDogJyB2ZWNlcyc7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZGlzdGljcyA9ICdIYXMgaGVjaG8gWUFBQVkhICcgKyB5YWFheVRpbWVzICsgdGltZXMgKyAnLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2xpZGVyVmFsdWVDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNsaWRlclZhbHVlID0gZXZlbnRbJ3ZhbHVlJ107XHJcbiAgICAgICAgdGhpcy5sYWJlbENvbnRlbnQgPSB0aGlzLnNsaWRlclZhbHVlICsgJ21zJztcclxuICAgICAgICBzZXROdW1iZXIoJ3ZpYlRpbWUnLCArdGhpcy5zbGlkZXJWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ2hlY2soZXZlbnQ6IGFueSwgY2hrOiBzdHJpbmcpIHtcclxuICAgICAgICBzZXRCb29sZWFuKGNoaywgZXZlbnRbJ3ZhbHVlJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9HaXRodWIoKSB7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChcImh0dHBzOi8vZ2l0aHViLmNvbS9KQ0FndWlsZXJhL3lhYWF5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ21haW4nXSk7XHJcbiAgICB9XHJcbn0iXX0=