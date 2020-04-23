import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MyLibModule } from 'projects/my-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    MatTabsModule
  ],
  imports: [
    BrowserModule,
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
