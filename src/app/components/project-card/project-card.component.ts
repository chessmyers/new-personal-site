import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectModel} from '../../models/Project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  host: {'[class]': '"tile" + " " + "is-child" + " " + "notification"', '[style]': '"background-color: " + project.color'}
})
export class ProjectCardComponent implements OnInit {

  @Input() project: ProjectModel;
  @Input() imageConfig: null | 'vert' | 'hor' = null;
  @Input() darkText = false;
  @Output() openProject: EventEmitter<ProjectModel> = new EventEmitter<ProjectModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
