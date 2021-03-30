import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { RestClient, RestClientModule } from '@core/rest-client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    RestClientModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [ RestClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
