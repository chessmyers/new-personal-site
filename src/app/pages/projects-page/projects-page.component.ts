import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../../models/Project.model';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  projects: ProjectModel[] = [];
  showModal = false;
  currentProject: ProjectModel;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.currentProject = this.projects[0];
  }

  showProject(project: ProjectModel) {
    this.currentProject = project;
    this.showModal = true;
  }

}
