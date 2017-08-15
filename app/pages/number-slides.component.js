"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var platform_1 = require("platform");
var numbers_service_1 = require("../service/numbers.service");
var NumberSlidesComponent = (function () {
    function NumberSlidesComponent(numbersService) {
        this.numbersService = numbersService;
        this.screenWidth = platform_1.screen.mainScreen.widthDIPs;
    }
    NumberSlidesComponent.prototype.ngOnInit = function () {
        this.currentSlide = 0;
        this.slideIndicators = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    };
    NumberSlidesComponent.prototype.onItemLoading = function (event) {
        event.view.width = this.screenWidth;
    };
    NumberSlidesComponent.prototype.onScrollEnded = function (event) {
        this.currentSlide = Math.round(event.scrollOffset / this.screenWidth);
        this.listViewComponent.listView.scrollToIndex(this.currentSlide, true);
    };
    NumberSlidesComponent.prototype.onNumber = function (number, slide) {
        if (this.numbersService.containsNumber(number, slide)) {
            this.numbersService.removeNumber(number, slide);
        }
        else {
            this.numbersService.addNumber(number, slide);
        }
        this.numbersService.log();
    };
    NumberSlidesComponent.prototype.isNumberSelected = function (number, slide) {
        return this.numbersService.containsNumber(number, slide);
    };
    NumberSlidesComponent.prototype.onClear = function (slide) {
        this.numbersService.clearNumbers(slide);
        this.numbersService.log();
    };
    NumberSlidesComponent.prototype.onFill = function (slide) {
        this.numbersService.generateRandomNumbers(slide);
        this.numbersService.log();
    };
    return NumberSlidesComponent;
}());
__decorate([
    core_1.ViewChild('listView'),
    __metadata("design:type", angular_1.RadListViewComponent)
], NumberSlidesComponent.prototype, "listViewComponent", void 0);
NumberSlidesComponent = __decorate([
    core_1.Component({
        selector: 'number-slides',
        moduleId: module.id,
        templateUrl: 'number-slides.component.html',
        styleUrls: ['number-slides.component.css']
    }),
    __metadata("design:paramtypes", [numbers_service_1.NumbersService])
], NumberSlidesComponent);
exports.NumberSlidesComponent = NumberSlidesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXNsaWRlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJudW1iZXItc2xpZGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxvRUFBZ0Y7QUFFaEYscUNBQWtDO0FBQ2xDLDhEQUE0RDtBQVE1RCxJQUFhLHFCQUFxQjtJQU85QiwrQkFBMkIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFTSx3Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSw2Q0FBYSxHQUFwQixVQUFxQixLQUF3QjtRQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFFTSw2Q0FBYSxHQUFwQixVQUFxQixLQUE4QjtRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sd0NBQVEsR0FBZixVQUFnQixNQUFjLEVBQUUsS0FBYTtRQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLGdEQUFnQixHQUF2QixVQUF3QixNQUFjLEVBQUUsS0FBYTtRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSx1Q0FBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxzQ0FBTSxHQUFiLFVBQWMsS0FBYTtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQWxEMEI7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQW9CLDhCQUFvQjtnRUFBQztBQUZ0RCxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzdDLENBQUM7cUNBUTZDLGdDQUFjO0dBUGhELHFCQUFxQixDQW9EakM7QUFwRFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBMaXN0Vmlld1Njcm9sbEV2ZW50RGF0YSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3JztcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IE51bWJlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9udW1iZXJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ251bWJlci1zbGlkZXMnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICdudW1iZXItc2xpZGVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbnVtYmVyLXNsaWRlcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyU2xpZGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2xpc3RWaWV3JykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuICAgIHByaXZhdGUgc2NyZWVuV2lkdGg6IG51bWJlcjtcbiAgICBwdWJsaWMgY3VycmVudFNsaWRlOiBudW1iZXI7XG4gICAgcHVibGljIHNsaWRlSW5kaWNhdG9yczogQXJyYXk8bnVtYmVyPjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG51bWJlcnNTZXJ2aWNlOiBOdW1iZXJzU2VydmljZSkge1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB0aGlzLnNsaWRlSW5kaWNhdG9ycyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtTG9hZGluZyhldmVudDogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgZXZlbnQudmlldy53aWR0aCA9IHRoaXMuc2NyZWVuV2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2Nyb2xsRW5kZWQoZXZlbnQ6IExpc3RWaWV3U2Nyb2xsRXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlID0gTWF0aC5yb3VuZChldmVudC5zY3JvbGxPZmZzZXQgLyB0aGlzLnNjcmVlbldpZHRoKTtcblxuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LnNjcm9sbFRvSW5kZXgodGhpcy5jdXJyZW50U2xpZGUsIHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk51bWJlcihudW1iZXI6IG51bWJlciwgc2xpZGU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5udW1iZXJzU2VydmljZS5jb250YWluc051bWJlcihudW1iZXIsIHNsaWRlKSkge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJzU2VydmljZS5yZW1vdmVOdW1iZXIobnVtYmVyLCBzbGlkZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm51bWJlcnNTZXJ2aWNlLmFkZE51bWJlcihudW1iZXIsIHNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubnVtYmVyc1NlcnZpY2UubG9nKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTnVtYmVyU2VsZWN0ZWQobnVtYmVyOiBudW1iZXIsIHNsaWRlOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyc1NlcnZpY2UuY29udGFpbnNOdW1iZXIobnVtYmVyLCBzbGlkZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xlYXIoc2xpZGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm51bWJlcnNTZXJ2aWNlLmNsZWFyTnVtYmVycyhzbGlkZSk7XG5cbiAgICAgICAgdGhpcy5udW1iZXJzU2VydmljZS5sb2coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25GaWxsKHNsaWRlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5udW1iZXJzU2VydmljZS5nZW5lcmF0ZVJhbmRvbU51bWJlcnMoc2xpZGUpO1xuXG4gICAgICAgIHRoaXMubnVtYmVyc1NlcnZpY2UubG9nKCk7XG4gICAgfVxuXG59Il19