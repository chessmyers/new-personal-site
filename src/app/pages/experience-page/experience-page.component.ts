import { Component, OnInit } from '@angular/core';
import {ExperienceModel} from '../../models/Experience.model';
import {ExperienceService} from '../../services/experience.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent implements OnInit {

  jobs: ExperienceModel[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.jobs = this.experienceService.getExperiences();
  }

}
