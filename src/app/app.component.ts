import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;
  user = this.authService.authState$;
  constructor(firestore: AngularFirestore, private authService: AuthService) {
    this.items = firestore.collection('items').valueChanges();
  }
  title = 'ImageGallery';

  signOut(){
    this.authService.signOut();
  }
}
