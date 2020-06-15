import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BlogListItemComponent } from './components/blog-list-item/blog-list-item.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { LostPageComponent } from './pages/lost-page/lost-page.component';
import { BlogPostviewPageComponent } from './pages/blog-postview-page/blog-postview-page.component';

import {BlogService} from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuLinkComponent,
    MenuBarComponent,
    HomePageComponent,
    ProjectsPageComponent,
    BlogPageComponent,
    ExperiencePageComponent,
    LostPageComponent,
    BlogPostviewPageComponent,
    BlogListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
