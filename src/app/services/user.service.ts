// import { User } from '../models/user.model';
import { RangeArray } from '../models/range-array.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

@Injectable()
export class UserService {

    private rangesOfCurrentUser: RangeArray;
    // rangesSubject = new Subject<Array<number>>();

    // private users: User[] = [];
    // userSubject = new Subject<User[]>();

    constructor() { }

    initRanges() {

        this.rangesOfCurrentUser = new RangeArray();
    }

    getRangesOfCurrentUser() {
        return this.rangesOfCurrentUser;
    }

    saveUserRanges() {

        let user = firebase.auth().currentUser;
        if (user != null) {
            firebase.database().ref(user.uid).set(this.rangesOfCurrentUser);
        }
    }

    downloadUserRanges() {
        let user = firebase.auth().currentUser;
        if (user != null)
        {
            firebase.database().ref(user.uid).on('value', (snapshot) => {
                this.rangesOfCurrentUser = new RangeArray();
                this.rangesOfCurrentUser = snapshot.val();
            })
        }
    }

    // emitUsers() {
    //     this.userSubject.next(this.users.slice());
    // }

    // addUser(user: User) {
    //     this.users.push(user);
    //     this.emitUsers();
    // }
}