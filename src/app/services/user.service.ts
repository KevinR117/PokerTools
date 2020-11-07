import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {

    private users: User[] = [];
    userSubject = new Subject<User[]>();

    constructor() { }

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}