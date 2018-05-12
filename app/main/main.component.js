"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("@angular/router");
var application_settings_1 = require("application-settings");
var nativescript_audio_1 = require("nativescript-audio");
var nativescript_vibrate_1 = require("nativescript-vibrate");
var MainComponent = /** @class */ (function () {
    function MainComponent(_page, router) {
        this._page = _page;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.yaaayTimes = application_settings_1.getNumber('yaaayTimes', 0);
        this._player = new nativescript_audio_1.TNSPlayer();
        this._vibrator = new nativescript_vibrate_1.Vibrate();
        this._page.actionBarHidden = true;
        this._player.initFromFile({
            // `${fs.knownFolders.currentApp().path}/path-to-webview-content.html`
            audioFile: "~/res/yay.mp3",
            loop: false
        });
    };
    MainComponent.prototype.onSettingsButtonTap = function () {
        this.router.navigate(['settings']);
    };
    MainComponent.prototype.onYaayButtonTap = function () {
        application_settings_1.setNumber('yaaayTimes', this.yaaayTimes + 1);
        if (this._player.isAudioPlaying()) {
            if (application_settings_1.getBoolean('spamChk', false)) {
                this._player.seekTo(0);
            }
        }
        else {
            this._player.play();
        }
        if (application_settings_1.getBoolean('vibChk', true)) {
            this._vibrator.vibrate(application_settings_1.getNumber('vibTime', 2000));
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBcUQ7QUFDckQsMENBQXlDO0FBQ3pDLDZEQUF3RTtBQUN4RSx5REFBK0M7QUFDL0MsNkRBQThDO0FBUTlDO0lBTUksdUJBQW9CLEtBQVcsRUFBVSxNQUFjO1FBQW5DLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUUzRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksOEJBQVMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw4QkFBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3RCLHNFQUFzRTtZQUN0RSxTQUFTLEVBQUUsZUFBZTtZQUMxQixJQUFJLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxnQ0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQy9CLEVBQUUsQ0FBQSxDQUFDLGlDQUFVLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLGlDQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQ0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFDTCxDQUFDO0lBcENRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBTzZCLFdBQUksRUFBa0IsZUFBTTtPQU45QyxhQUFhLENBc0N6QjtJQUFELG9CQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldE51bWJlciB9IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgVE5TUGxheWVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcclxuaW1wb3J0IHsgVmlicmF0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWJyYXRlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1tYWluXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYWluLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tYWluLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBfcGxheWVyOiBUTlNQbGF5ZXI7XHJcbiAgICBfdmlicmF0b3I6IFZpYnJhdGU7XHJcbiAgICB5YWFheVRpbWVzOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnlhYWF5VGltZXMgPSBnZXROdW1iZXIoJ3lhYWF5VGltZXMnLCAwKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5fdmlicmF0b3IgPSBuZXcgVmlicmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIuaW5pdEZyb21GaWxlKHtcclxuICAgICAgICAgICAgLy8gYCR7ZnMua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5wYXRofS9wYXRoLXRvLXdlYnZpZXctY29udGVudC5odG1sYFxyXG4gICAgICAgICAgICBhdWRpb0ZpbGU6IGB+L3Jlcy95YXkubXAzYCwgLy8gfiA9IGFwcCBkaXJlY3RvcnlcclxuICAgICAgICAgICAgbG9vcDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNldHRpbmdzQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2V0dGluZ3MnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25ZYWF5QnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHNldE51bWJlcigneWFhYXlUaW1lcycsIHRoaXMueWFhYXlUaW1lcysxKTtcclxuICAgICAgICBpZiAodGhpcy5fcGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpe1xyXG4gICAgICAgICAgICBpZihnZXRCb29sZWFuKCdzcGFtQ2hrJywgZmFsc2UpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllci5zZWVrVG8oMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZ2V0Qm9vbGVhbigndmliQ2hrJywgdHJ1ZSkpe1xyXG4gICAgICAgICAgICB0aGlzLl92aWJyYXRvci52aWJyYXRlKGdldE51bWJlcigndmliVGltZScsIDIwMDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19