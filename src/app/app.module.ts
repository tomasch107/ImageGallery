import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { UploadImageComponent } from './Components/upload-image/upload-image.component';
import { DropzoneDirective } from './Directives/dropzone.directive';
import { UploadTaskComponent } from './Components/upload-task/upload-task.component';
import { GalleryComponent } from './Components/gallery/gallery.component'
import { LightboxModule } from 'ngx-lightbox';
import { GalleryPostComponent } from './Components/gallery-post/gallery-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AdminComponent,
    LoginComponent,
    MainPageComponent,
    UploadImageComponent,
    DropzoneDirective,
    UploadTaskComponent,
    GalleryComponent,
    GalleryPostComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
