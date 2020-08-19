import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceViewPageComponent } from './experience-view-page.component';

describe('ExperienceViewPageComponent', () => {
  let component: ExperienceViewPageComponent;
  let fixture: ComponentFixture<ExperienceViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
