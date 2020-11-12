import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {

    isAuth: boolean;

    constructor(private userService: UserService) { }

    signIn(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().signInWithEmailAndPassword(email, password).then(
                    () => {
                        this.isAuth = true;
                        resolve(true);
                        this.userService.downloadUserRanges();
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    signUp(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().createUserWithEmailAndPassword(email, password).then(
                    () => {
                        resolve(true);
                        this.userService.initRanges();
                        this.userService.saveUserRanges();
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    signOut() {
        firebase.auth().signOut();
        this.isAuth = false;
    }
}