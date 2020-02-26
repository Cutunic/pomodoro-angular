import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SecToMin } from './secToMin.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClockComponent } from './components/clock/clock.component';
import { BreakComponent } from './components/break/break.component';
import { SessionComponent } from './components/session/session.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TimerComponent } from './components/timer/timer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClockComponent,
    BreakComponent,
    SessionComponent,
    ButtonsComponent,
    TimerComponent,
    SecToMin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
