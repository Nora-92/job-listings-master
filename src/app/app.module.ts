import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryJobsService } from './in-memory-jobs';
import { HomeComponent } from './home/home.component';
import { JobsDetailComponent } from './jobs-detail/jobs-detail.component';
import { CardComponent } from './card/card.component';
import { CompanyDescriptionComponent } from './company-description/company-description.component';
import { AvatarComponent } from './avatar/avatar.component';
import { JobTitleComponent } from './job-title/job-title.component';
import { PillComponent } from './pill/pill.component';
import { PillLanguagesComponent } from './pill-languages/pill-languages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsDetailComponent,
    CardComponent,
    CompanyDescriptionComponent,
    AvatarComponent,
    JobTitleComponent,
    PillComponent,
    PillLanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryJobsService, {delay: 200})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
