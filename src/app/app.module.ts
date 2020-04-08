import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateAdapter } from '../date-adapters/date-adapter';
import { adapterFactory } from '../date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatIconModule } from '@angular/material/icon';
import { CalendarModule } from '../modules/calendar.module';
  @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
