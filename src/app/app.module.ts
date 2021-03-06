import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatTabsModule,
  MatTooltipModule

} from '@angular/material';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { HomePageComponent } from './home-page/home-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
// import { PageNotFoundComponent } from './PageNotFound/Page-Not-Found.component';

enableProdMode();

// angular.module('myModule', ['chart.js']);

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: 'home',       component: HomePageComponent },
  { path: 'about',      component: AboutPageComponent },
  { path: 'skills',     component: SkillsPageComponent },
  { path: 'portfolio',  component: PortfolioPageComponent },
  { path: 'resume',     component: ResumePageComponent },
  // { path: '**',         component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ResumePageComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    ProjectDialogComponent,
    FooterComponent,
    SkillsPageComponent
  ],
  entryComponents: [
    ProjectDialogComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: './' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
