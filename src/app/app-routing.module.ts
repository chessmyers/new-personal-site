import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {HomePageComponent} from './pages/home-page/home-page.component';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {ExperiencePageComponent} from './pages/experience-page/experience-page.component';
import {BlogPageComponent} from './pages/blog-page/blog-page.component';
import {LostPageComponent} from './pages/lost-page/lost-page.component';



const routes: Routes = [
  {path: 'home', component: HomePageComponent, data: {animation: 'HomePage'}},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'experience', component: ExperiencePageComponent},
  {path: 'blog', component: BlogPageComponent, data: {animation: 'BlogPage'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: LostPageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
