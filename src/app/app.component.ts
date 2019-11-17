import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoAngularAPPCompras';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDLs34LKXr3-6qyF4O5KnDu6LTJRqvQMTI",
      authDomain: "comprasapp-11595.firebaseapp.com"
    });
  }


}
