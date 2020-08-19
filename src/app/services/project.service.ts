import { Injectable } from '@angular/core';
import {ProjectModel} from '../models/Project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  projects: ProjectModel[] = [
    {
      id: 0,
      name: "Addy",
      description: "A fun app",
      dates: [new Date(2019, 5, 1), new Date(2020, 8, 1)],
      techs: [{name: "React Native", url: "https://reactnative.dev/", color: "blue"}],
      images: []
    }
  ];

  getProjects(): ProjectModel[] {
    return this.projects;
  }

  getProject(id: number): ProjectModel {
    return this.getProjects().find(exp => exp.id === id);
  }

}
