import { Injectable } from '@angular/core';
import { RangeArray } from '../models/range-array.model';
import { Hand } from '../models/hand.model';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { Pair } from '../models/pair.model';

@Injectable()
export class UserService {

    private rangesOfCurrentUser: RangeArray = new RangeArray();
    rangesSubject: BehaviorSubject<Pair<string, Pair<string, Hand[][]>[]>[]>;

    constructor() {
        let basePair: Pair<string, Pair<string, Hand[][]>[]>[] = this.rangesOfCurrentUser.rangesArray;
        this.rangesSubject = new BehaviorSubject<Pair<string, Pair<string, Hand[][]>[]>[]>(basePair);
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
                for (let pos: number = 0; pos < 6; pos++) {
                    for (let bb: number = 0; bb < 3; bb++) {
                        for (let line: number = 0; line < 13; line++) {
                            for (let column: number = 0; column < 13; column++) {
                                this.rangesOfCurrentUser.rangesArray[pos].getValue()[bb].getValue()[line][column].play = snapshot.val().rangesArray[pos]['value'][bb]['value'][line][column].play;
                            }
                        }
                    }
                }
                this.emitRanges();
            })
        }
    }

    emitRanges() {
        this.rangesSubject.next(this.rangesOfCurrentUser.rangesArray.slice());
    }
}