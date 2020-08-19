import { Injectable } from '@angular/core';
import {ExperienceModel} from '../models/Experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experiences: ExperienceModel[] = [
    {
      id: 0,
      name: 'SourceOne, Inc',
      logo: 'assets/sourceone.png',
      description: 'Worked here',
      color: '#EB2226',
      siteLink: 'https://www.sourceone.veolianorthamerica.com/'
    }
  ];

  getExperiences(): ExperienceModel[] {
    return this.experiences;
  }

  getExperience(id: number): ExperienceModel {
    return this.getExperiences().find(exp => exp.id === id);
  }

}
