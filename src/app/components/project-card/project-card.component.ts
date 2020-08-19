import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '../../models/Project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: ProjectModel;

  constructor() { }

  ngOnInit(): void {
  }

}
