import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthService {

    isAuth: boolean;

    signIn(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().signInWithEmailAndPassword(email, password).then(
                    () => {
                        this.isAuth = true;
                        resolve(true);
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