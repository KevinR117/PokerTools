import { Component, OnInit } from '@angular/core';
import { PlayCard } from '../models/play-card.model';
import { UpdateRangeService } from '../services/update-range.service';

@Component({
  selector: 'app-ranges-modification',
  templateUrl: './ranges-modification.component.html',
  styleUrls: ['./ranges-modification.component.scss']
})
export class RangesModificationComponent implements OnInit {

  playCard: PlayCard = PlayCard.Fold;

  constructor(private updateRangeService: UpdateRangeService) { }

  ngOnInit(): void {
  }

  newPlay(play: number) {
    this.playCard = Object.values(PlayCard)[play];
    this.updateRangeService.emitPlay(this.playCard);
  }
}
