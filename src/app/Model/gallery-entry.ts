import { GalleryPost } from './gallery-post';
import { FileData } from './file-data';
export interface GalleryEntry {
  fileData: FileData[];
  galleryPost: GalleryPost;
}
