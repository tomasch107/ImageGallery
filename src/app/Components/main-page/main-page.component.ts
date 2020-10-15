import { Component, OnInit } from '@angular/core';
import { GalleryPostService } from 'src/app/Service/gallery-post.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  image;
  constructor(private galleryPostService: GalleryPostService) { }

  ngOnInit(): void {
    console.log(this.galleryPostService.getNewestGalleryPost().valueChanges());

    this.galleryPostService.getNewestGalleryPost().valueChanges().subscribe(snapshots => {
      this.image = snapshots;
    }, error => {
      console.log(error);
    });
  }

}
