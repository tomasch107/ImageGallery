import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GalleryEntry } from 'src/app/Model/gallery-entry';
import { GalleryPostService } from 'src/app/Service/gallery-post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-post',
  templateUrl: './gallery-post.component.html',
  styleUrls: ['./gallery-post.component.scss']
})
export class GalleryPostComponent implements OnInit {
  id: string;
  private sub: any;

  @Input()
  image;
  @Output() backToGallery = new EventEmitter();
  constructor(private galleryPostService: GalleryPostService, private route: ActivatedRoute) {
}

  ngOnInit(): void {
    if (this.image == null){
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
        this.galleryPostService.getGalleryPostById(this.id).subscribe(snapshots => {
          this.image = snapshots;
        }, error => {
          console.log(error);
        });
     });
    }
  }
}
