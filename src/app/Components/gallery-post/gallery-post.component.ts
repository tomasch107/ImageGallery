import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GalleryEntry } from 'src/app/Model/gallery-entry';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-gallery-post',
  templateUrl: './gallery-post.component.html',
  styleUrls: ['./gallery-post.component.scss']
})
export class GalleryPostComponent implements OnInit {
  @Input()
  image: { downloadURL: string, galleryEntry: GalleryEntry };
  @Output() backToGallery = new EventEmitter();
  constructor( private location: LocationStrategy) {
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
      this.goBack();
    })
}

  ngOnInit(): void {
    console.log(this.image);
  }

  goBack(){
    this.backToGallery.emit();
  }
}
