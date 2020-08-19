import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ExperienceService} from '../../services/experience.service';
import {ExperienceModel} from '../../models/Experience.model';

@Component({
  selector: 'app-experience-view-page',
  templateUrl: './experience-view-page.component.html',
  styleUrls: ['./experience-view-page.component.css']
})
export class ExperienceViewPageComponent implements OnInit {
  experience: ExperienceModel;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.experience = this.experienceService.getExperience(id);
  }

}
