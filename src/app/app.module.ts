import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { LocationStrategy,PathLocationStrategy } from '@angular/common';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
