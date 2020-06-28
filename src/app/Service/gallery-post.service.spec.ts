import { TestBed } from '@angular/core/testing';

import { GalleryPostService } from './gallery-post.service';

describe('GalleryPostService', () => {
  let service: GalleryPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
