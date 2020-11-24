import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UpdateRangeService } from '../services/update-range.service';
import { PlayCard } from '../models/play-card.model';
import { Subscription } from 'rxjs';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit, OnDestroy {

  @Input() card1: string;
  @Input() card2: string;
  @Input() suited: string;
  @Input() playCard: string;
  @Input() modifyMode: boolean;

  @Input() pos: number;
  @Input() bb: number;

  playCardUpdate: PlayCard;
  playCardUpdateSubscription: Subscription;

  constructor(private updateRangeService: UpdateRangeService) { }

  ngOnInit(): void {
    this.playCardUpdateSubscription = this.updateRangeService.playSubject.subscribe(
      (playCardUpdate: PlayCard) => {
        this.playCardUpdate = playCardUpdate;
      }
    );
  }

  ngOnDestroy(): void {
    this.playCardUpdateSubscription.unsubscribe();
  }

  onChangePlay(card1: string, card2: string, suited: string, play: PlayCard, pos: number, bb: number) {
    if (suited == 's') {
      this.updateRangeService.updateRange(this.getCardIndex(card1), this.getCardIndex(card2), play, pos, bb);
    }
    else {
      this.updateRangeService.updateRange(this.getCardIndex(card2), this.getCardIndex(card1), play, pos, bb);
    }
  }

  getCardIndex(card: string) {
    for (let index: number = 0; index < 13; index++) {
      if (Object.values(Card)[index] == card) {
        return index;
      }
    }
  }
}
