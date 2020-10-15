import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileData } from 'src/app/Model/file-data';
import { GalleryPostService } from '../../Service/gallery-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  isHovering: boolean;

  types: string[] = [
    'Galaxies',
    'Nebulae',
    'Widefields',
    'Milkyway',
    'Clusters',
    'Others',
    'Solarsystem'
  ];
  filePaths: FileData[] = [];
  files: File[] = [];
  galleryPost = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl(''),
    descriptionpl: new FormControl(''),
    titlepl: new FormControl(''),
    telescope: new FormControl(''),
    camera: new FormControl(''),
    mount: new FormControl(''),
    location: new FormControl(''),
    time: new FormControl(''),
    date: new FormControl('')
  });
  constructor(private galleryPostService: GalleryPostService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  deleteImage(index: number){
    this.files.splice(index, 1);
    this.filePaths.splice(index, 1);
  }

  onUploadGalleryPost(){
    this.galleryPostService.uploadGalleryPost(this.galleryPost.value, this.filePaths);
    this.router.navigate(['admin']);
  }

  addUploadedUrls(event: FileData){
    this.filePaths.push(event);
    console.log(this.filePaths);
  }
}
