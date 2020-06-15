import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostviewPageComponent } from './blog-postview-page.component';

describe('BlogPostviewPageComponent', () => {
  let component: BlogPostviewPageComponent;
  let fixture: ComponentFixture<BlogPostviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
