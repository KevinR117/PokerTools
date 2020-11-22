import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlayCard } from '../models/play-card.model';
import { UserService } from '../services/user.service';

@Injectable()
export class UpdateRangeService {
    playSubject: BehaviorSubject<PlayCard>;

    constructor(private userService: UserService) {
        this.playSubject = new BehaviorSubject<PlayCard>(PlayCard.Fold);
    }

    updateRange(card1: number, card2: number, play: PlayCard, pos: number, bb: number) {
        this.userService.getRangesOfCurrentUser().rangesArray[pos].getValue()[bb].getValue()[card1][card2].play = play;
        this.userService.emitRanges();
    }

    emitPlay(play: PlayCard) {
        this.playSubject.next(play);
    }
}