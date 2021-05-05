import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryJobsService } from './in-memory-jobs';
import { HomeComponent } from './home/home.component';
import { JobsDetailComponent } from './jobs-detail/jobs-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsDetailComponent
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
