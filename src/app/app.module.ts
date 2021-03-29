import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RestClientModule } from './core/rest-client/rest-client.module';
import { RestClient } from './core/rest-client/rest-client.service';

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
