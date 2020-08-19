import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { PageTemplateComponent } from './pages/page-template/page-template.component';
import { BlogViewPageComponent } from './pages/blog-view-page/blog-view-page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { WorkCardComponent } from './components/work-card/work-card.component';
import { ExperienceViewPageComponent } from './pages/experience-view-page/experience-view-page.component';
import { ProjectViewPageComponent } from './pages/project-view-page/project-view-page.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    AppContainerComponent,
    HomePageComponent,
    BlogPageComponent,
    ProjectsPageComponent,
    ExperiencePageComponent,
    ContactPageComponent,
    ResumePageComponent,
    PageTemplateComponent,
    BlogViewPageComponent,
    BreadcrumbComponent,
    WorkCardComponent,
    ExperienceViewPageComponent,
    ProjectViewPageComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    BrowserAnimationsModule,
    MessageModule,
    RouterModule,
    AppRoutingModule,
    BreadcrumbModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
