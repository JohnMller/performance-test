import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { NumberSlidesComponent } from './pages/number-slides.component';
import { DummyComponent } from './pages/dummy.component';

const routes: Routes = [
    { path: "", redirectTo: "/number-slides", pathMatch: "full" },
    { path: "number-slides", component: NumberSlidesComponent },
    { path: "dummy", component: DummyComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }