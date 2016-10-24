import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimerComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TimerComponent ],
  bootstrap:    [ TimerComponent ]
})

export class AppModule { }
