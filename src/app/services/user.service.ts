import { RangeArray } from '../models/range-array.model';
import { Hand } from '../models/hand.model';
import { Subject } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { Pair } from '../models/pair.model';

export class UserService {

    private rangesOfCurrentUser: RangeArray = new RangeArray();
    rangesSubject = new Subject<Pair<string, Pair<string, Hand[][]>[]>[]>();

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
        this.emitRanges();
    }

    emitRanges() {
        this.rangesSubject.next(this.rangesOfCurrentUser.rangesArray.slice());
    }

    updateRanges() {

        //Updates à faire

        this.emitRanges();
    }
}