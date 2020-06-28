import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryPostService } from 'src/app/Service/gallery-post.service';
import { AngularFirestore , AngularFirestoreCollection, } from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage';

import { GalleryEntry } from 'src/app/Model/gallery-entry';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  private collection: AngularFirestoreCollection<GalleryEntry>;
  items: Observable<GalleryEntry[]>;
  activeRoute: string;

  images: Array<{ downloadURL: string, galleryEntry: GalleryEntry }> = new Array();
  currentImage: { downloadURL: string, galleryEntry: GalleryEntry };
  openPost = false;

  constructor(private galleryPostService: GalleryPostService, private storage: AngularFireStorage, private route: Router,) { }

  ngOnInit(): void {
    this.activeRoute = this.route.url.replace('/', '');
    this.activeRoute = this.activeRoute.charAt(0).toUpperCase() + this.activeRoute.slice(1);

    this.collection = this.galleryPostService.getGalleriesPost(this.activeRoute);
    this.items = this.collection.valueChanges();

    this.items.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        const ref = this.storage.ref(snapshot.fileData[0].path.replace('.jpg', '') + '_900x600.jpg');
        ref.getDownloadURL().toPromise().then(url => {
          this.images.push({
            downloadURL: url,
            galleryEntry: snapshot
          });
        }).catch(error => {
          console.log(error);
        });
      });
    });
}

  showData(){
    console.log(this.items);
    console.log(this.images);
  }

  openGalleryPost(image: { downloadURL: string, galleryEntry: GalleryEntry }){
    this.currentImage = image;
    this.openPost = true;
  }
}
