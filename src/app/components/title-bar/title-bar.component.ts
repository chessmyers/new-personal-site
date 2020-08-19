import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home'
      },
      {
        label: 'Experience',
        icon: 'pi pi-fw pi-users',
        routerLink: 'experience'
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-th-large',
        routerLink: 'projects'
      },
      {
        label: 'Resume',
        icon: 'pi pi-fw pi-file-pdf',
        routerLink: 'resume'
      },
      {
        label: 'Blog',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'blog'
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-id-card',
        routerLink: 'contact'
      }
    ];
  }

}
