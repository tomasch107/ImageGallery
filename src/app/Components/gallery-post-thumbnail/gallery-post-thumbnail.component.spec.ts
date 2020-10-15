import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPostThumbnailComponent } from './gallery-post-thumbnail.component';

describe('GalleryPostThumbnailComponent', () => {
  let component: GalleryPostThumbnailComponent;
  let fixture: ComponentFixture<GalleryPostThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPostThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPostThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
