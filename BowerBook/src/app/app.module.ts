import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule,
  MatCardModule, MatGridListModule, MatButtonModule} from '@angular/material';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InterestCardComponent } from './components/interest-card/interest-card.component';
import { InterestDetailComponent } from './components/interest-detail/interest-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    InterestCardComponent,
    InterestDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: APP_CONFIG, useValue: AppConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
