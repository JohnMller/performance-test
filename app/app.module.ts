import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { LISTVIEW_DIRECTIVES } from "nativescript-telerik-ui/listview/angular";

import { NumberSlidesComponent } from './pages/number-slides.component';
import { DummyComponent } from './pages/dummy.component';
import { NumbersService } from './service/numbers.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        LISTVIEW_DIRECTIVES,
        AppComponent,
        NumberSlidesComponent,
        DummyComponent
    ],
    providers: [
        NumbersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
