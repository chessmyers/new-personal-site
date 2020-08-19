import {Component, Input, OnInit} from '@angular/core';
import {ExperienceModel} from '../../models/Experience.model';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {

  @Input() entry: ExperienceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
