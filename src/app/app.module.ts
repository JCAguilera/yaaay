import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptLocalizeModule } from "@nativescript/localize/angular";
import { NativeScriptModule } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./main/home/home.component";
import { ChangelogComponent } from "./main/changelog/changelog.component";
import { AboutComponent } from "./main/about/about.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptLocalizeModule,
    AppRoutingModule,
    NativeScriptUISideDrawerModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ChangelogComponent,
    AboutComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
