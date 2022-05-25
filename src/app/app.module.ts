import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, TimerComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      backgroundOpacity: 1,
      radius: 60,
      space: -10,
      toFixed: 0,
      maxPercent: 1000,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: '#8c24f5',
      outerStrokeGradientStopColor: '#e26fbd',
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 10,
      title: 'UI',
      imageHeight: 20,
      animateTitle: false,
      animationDuration: 0,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      responsive: true,
      lazy: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
