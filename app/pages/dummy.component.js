"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DummyComponent = (function () {
    function DummyComponent() {
    }
    return DummyComponent;
}());
DummyComponent = __decorate([
    core_1.Component({
        selector: 'dummy',
        moduleId: module.id,
        template: "\n        <DockLayout>\n            <Label dock=\"top\" text=\"Dummy Page\"></Label>\n            <Button dock=\"bottom\" text=\"Back\" [nsRouterLink]=\"['/number-slides']\"></Button>\n        </DockLayout>\n    ",
        styles: ["\n        Label {\n            font-size: 20;\n            text-align: center;\n        },\n        Button {\n            vertical-align: bottom;\n        }\n    "]
    })
], DummyComponent);
exports.DummyComponent = DummyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHVtbXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBcUIxQyxJQUFhLGNBQWM7SUFBM0I7SUFDQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLGNBQWM7SUFuQjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHNOQUtUO1FBQ0QsTUFBTSxFQUFFLENBQUMsb0tBUVIsQ0FBQztLQUNMLENBQUM7R0FDVyxjQUFjLENBQzFCO0FBRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkdW1teScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8RG9ja0xheW91dD5cbiAgICAgICAgICAgIDxMYWJlbCBkb2NrPVwidG9wXCIgdGV4dD1cIkR1bW15IFBhZ2VcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEJ1dHRvbiBkb2NrPVwiYm90dG9tXCIgdGV4dD1cIkJhY2tcIiBbbnNSb3V0ZXJMaW5rXT1cIlsnL251bWJlci1zbGlkZXMnXVwiPjwvQnV0dG9uPlxuICAgICAgICA8L0RvY2tMYXlvdXQ+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIExhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH0sXG4gICAgICAgIEJ1dHRvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgRHVtbXlDb21wb25lbnQge1xufSJdfQ==