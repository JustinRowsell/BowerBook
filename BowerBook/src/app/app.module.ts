import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule,
  MatCardModule, MatGridListModule, MatButtonModule, MatChipsModule,
  MatExpansionModule } from '@angular/material';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InterestCardComponent } from './components/interest-card/interest-card.component';
import { InterestDetailComponent } from './components/interest-detail/interest-detail.component';
import { InterestListItemComponent } from './components/interest-list-item/interest-list-item.component';
import { InterestExpansionPanelComponent } from './components/interest-expansion-panel/interest-expansion-panel.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './components/auth/user-login/user-login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    InterestCardComponent,
    InterestDetailComponent,
    InterestListItemComponent,
    InterestExpansionPanelComponent,
    UserLoginComponent
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
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: APP_CONFIG, useValue: AppConfig
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
