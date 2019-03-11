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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    InterestCardComponent,
    InterestDetailComponent,
    InterestListItemComponent,
    InterestExpansionPanelComponent
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
    MatExpansionModule
  ],
  providers: [
    {
      provide: APP_CONFIG, useValue: AppConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
