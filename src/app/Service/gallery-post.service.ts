import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GalleryPost } from '../Model/gallery-post';
import { FileData } from '../Model/file-data';
import { GalleryEntry } from 'src/app/Model/gallery-entry';

@Injectable({
  providedIn: 'root'
})
export class GalleryPostService {

  constructor(private db: AngularFirestore) { }

  uploadGalleryPost(galleryPost: GalleryPost, fileData: FileData []){
      this.db.collection('galleryEntry').add( {galleryPost, fileData});
  }

  getGalleriesPost(type: string){
    return this.db.collection<GalleryEntry>('galleryEntry', ref => ref.where('galleryPost.type', '==', type));
  }

  getGalleryPostById(id: string){
    return this.db.collection('galleryEntry').doc(id)
    .valueChanges();
  }
}
