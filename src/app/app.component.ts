import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PokerTools';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDozL9mvVLtb--KYHChN9YSlIpE4j-Httk",
      authDomain: "pokertools-f2d5c.firebaseapp.com",
      databaseURL: "https://pokertools-f2d5c.firebaseio.com",
      projectId: "pokertools-f2d5c",
      storageBucket: "pokertools-f2d5c.appspot.com",
      messagingSenderId: "945736707980",
      appId: "1:945736707980:web:fd16ba2ed744f9fa54f0a9",
      measurementId: "G-D8C56S2Z7J"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
