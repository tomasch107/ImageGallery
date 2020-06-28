import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { UploadImageComponent } from './Components/upload-image/upload-image.component';
import { GalleryComponent } from './Components/gallery/gallery.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', component: MainPageComponent},
  { path: 'uploadImage', component: UploadImageComponent, canActivate: [AuthGuard]},
  { path: 'galaxies', component: GalleryComponent},
  { path: 'nebulae', component: GalleryComponent},
  { path: 'galaxies', component: GalleryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
