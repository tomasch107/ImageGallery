import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryEntry } from 'src/app/Model/gallery-entry';

@Component({
  selector: 'app-gallery-post-thumbnail',
  templateUrl: './gallery-post-thumbnail.component.html',
  styleUrls: ['./gallery-post-thumbnail.component.scss']
})

export class GalleryPostThumbnailComponent implements OnInit {
  @Input()
  image;
  constructor( private route: Router) { }

  ngOnInit(): void {
    console.log(this.image)
  }
  openGalleryPost(image: { downloadURL: string, galleryEntry: GalleryEntry }){
    console.log (this.route.url);
    this.route.navigate([ this.route.url + '/', image.galleryEntry.galleryId]);
  }
}
