"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("@angular/router");
var application_settings_1 = require("application-settings");
var nativescript_audio_player_1 = require("nativescript-audio-player");
var nativescript_vibrate_1 = require("nativescript-vibrate");
var MainComponent = /** @class */ (function () {
    function MainComponent(_page, router) {
        this._page = _page;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.yaaayTimes = application_settings_1.getNumber('yaaayTimes', 0);
        this._player = new nativescript_audio_player_1.TNSPlayer();
        this._vibrator = new nativescript_vibrate_1.Vibrate();
        this._page.actionBarHidden = true;
        this._player.initFromFile({
            audioFile: "~/res/yay.mp3",
            loop: false
        });
    };
    MainComponent.prototype.onSettingsButtonTap = function () {
        this.router.navigate(['settings']);
    };
    MainComponent.prototype.onYaayButtonTap = function () {
        if (this._player.isAudioPlaying()) {
            if (application_settings_1.getBoolean('spamChk', false)) {
                this.yaaayCounter();
                this._player.seekTo(0);
            }
        }
        else {
            this.yaaayCounter();
            this._player.play();
        }
        if (application_settings_1.getBoolean('vibChk', true)) {
            this._vibrator.vibrate(application_settings_1.getNumber('vibTime', 2000));
        }
    };
    MainComponent.prototype.yaaayCounter = function () {
        this.yaaayTimes++;
        application_settings_1.setNumber('yaaayTimes', this.yaaayTimes);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "ns-main",
            moduleId: module.id,
            templateUrl: "./main.component.html",
            styleUrls: ['./main.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBcUQ7QUFDckQsMENBQXlDO0FBQ3pDLDZEQUF3RTtBQUN4RSx1RUFBc0Q7QUFDdEQsNkRBQThDO0FBUTlDO0lBTUksdUJBQW9CLEtBQVcsRUFBVSxNQUFjO1FBQW5DLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUUzRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUNBQVMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw4QkFBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3RCLFNBQVMsRUFBRSxlQUFlO1lBQzFCLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQy9CLEVBQUUsQ0FBQSxDQUFDLGlDQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBQ0wsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLGlDQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQ0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFDTCxDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsZ0NBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUF6Q1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FPNkIsV0FBSSxFQUFrQixlQUFNO09BTjlDLGFBQWEsQ0EyQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyIH0gZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8tcGxheWVyJztcclxuaW1wb3J0IHsgVmlicmF0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWJyYXRlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1tYWluXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYWluLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tYWluLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBfcGxheWVyOiBUTlNQbGF5ZXI7XHJcbiAgICBfdmlicmF0b3I6IFZpYnJhdGU7XHJcbiAgICB5YWFheVRpbWVzOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnlhYWF5VGltZXMgPSBnZXROdW1iZXIoJ3lhYWF5VGltZXMnLCAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5fdmlicmF0b3IgPSBuZXcgVmlicmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIuaW5pdEZyb21GaWxlKHtcclxuICAgICAgICAgICAgYXVkaW9GaWxlOiBgfi9yZXMveWF5Lm1wM2AsIC8vIH4gPSBhcHAgZGlyZWN0b3J5XHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXR0aW5nc0J1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NldHRpbmdzJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uWWFheUJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpe1xyXG4gICAgICAgICAgICBpZihnZXRCb29sZWFuKCdzcGFtQ2hrJywgZmFsc2UpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMueWFhYXlDb3VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIuc2Vla1RvKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMueWFhYXlDb3VudGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGdldEJvb2xlYW4oJ3ZpYkNoaycsIHRydWUpKXtcclxuICAgICAgICAgICAgdGhpcy5fdmlicmF0b3IudmlicmF0ZShnZXROdW1iZXIoJ3ZpYlRpbWUnLCAyMDAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgeWFhYXlDb3VudGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMueWFhYXlUaW1lcysrO1xyXG4gICAgICAgIHNldE51bWJlcigneWFhYXlUaW1lcycsIHRoaXMueWFhYXlUaW1lcyk7XHJcbiAgICB9XHJcblxyXG59Il19