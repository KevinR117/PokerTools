import { Component, OnInit } from '@angular/core';
import { Hand } from '../models/hand.model';
import { Subscription } from 'rxjs';
import { Pair } from '../models/pair.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ranges-view',
  templateUrl: './ranges-view.component.html',
  styleUrls: ['./ranges-view.component.scss']
})

export class RangesViewComponent implements OnInit {

  rangeTitle: string;

  bbCount: number = 0;
  pos: number = 0;

  arrayHands: Hand[][] = new Array<Array<Hand>>();
  arrayRanges: Pair<string, Pair<string, Hand[][]>[]>[];
  arraySubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.arraySubscription = this.userService.rangesSubject.subscribe(
      (arrayRanges: Pair<string, Pair<string, Hand[][]>[]>[]) => {
        
        this.arrayRanges = arrayRanges;
        //Modifier les index ici, faire une fonction qui donnera en fonction de l'identifiant pos-bb la bonne range à afficher
        this.rangeTitle = 'Open ' + arrayRanges[this.pos].getKey().toUpperCase() 
                                  + ' - ' 
                                  + arrayRanges[this.pos].getValue()[this.bbCount].getKey() 
                                  + ' BB';

        this.arrayHands = arrayRanges[this.pos].getValue()[this.bbCount].getValue();
      }
    )

    // this.userService.emitRanges();
  }

  ngOnDestroy(): void {
    this.arraySubscription.unsubscribe();
  }

  //FAIRE CES CHANGEMENTS AVEC DES SUBJECTS ---> C'EST PLUS ANGULAR FRIENDLY

  updatePos(newPos: number) {
    this.pos = newPos;
    this.rangeTitle = 'Open ' + this.arrayRanges[this.pos].getKey().toUpperCase() 
                              + ' - ' 
                              + this.arrayRanges[this.pos].getValue()[this.bbCount].getKey() 
                              + ' BB';
    this.arrayHands = this.arrayRanges[this.pos].getValue()[this.bbCount].getValue();
  }

  updateBbCount(newBbCount: number) {
    this.bbCount = newBbCount;
    this.rangeTitle = 'Open ' + this.arrayRanges[this.pos].getKey().toUpperCase() 
                              + ' - ' 
                              + this.arrayRanges[this.pos].getValue()[this.bbCount].getKey() 
                              + ' BB';
    this.arrayHands = this.arrayRanges[this.pos].getValue()[this.bbCount].getValue();
  }
}
