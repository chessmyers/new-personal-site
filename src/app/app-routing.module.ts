import {HomePageComponent} from './pages/home-page/home-page.component';
import {BlogPageComponent} from './pages/blog-page/blog-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExperiencePageComponent} from './pages/experience-page/experience-page.component';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {ResumePageComponent} from './pages/resume-page/resume-page.component';
import {BlogViewPageComponent} from './pages/blog-view-page/blog-view-page.component';
import {ExperienceViewPageComponent} from './pages/experience-view-page/experience-view-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      breadcrumb: 'Home'
    },
  },
  {
    path: 'blog',
    component: BlogPageComponent,
    data: {
      breadcrumb: 'Blog'
    }
  },
  {
    path: 'blog/:id',
    component: BlogViewPageComponent,
    data: {
      breadcrumb: 'Blog View'
    }
  },
  {
    path: 'experience',
    component: ExperiencePageComponent,
    data: {
      breadcrumb: 'Experience'
    },
  },
  {
    path: 'experience/:id',
    component: ExperienceViewPageComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    data: {
      breadcrumb: 'Projects'
    },
  },
  {
    path: 'resume',
    component: ResumePageComponent,
    data: {
      breadcrumb: 'Resume'
    },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      breadcrumb: 'Contact'
    },
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
