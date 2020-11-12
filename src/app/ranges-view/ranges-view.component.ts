import { Component, OnInit } from '@angular/core';
import { Hand } from '../models/hand.model';
import { Subscription } from 'rxjs';
// import { TableService } from '../services/table.service';
import { Pair } from '../models/pair.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ranges-view',
  templateUrl: './ranges-view.component.html',
  styleUrls: ['./ranges-view.component.scss']
})

export class RangesViewComponent implements OnInit {

  arrayHands: Hand[][] = new Array<Array<Hand>>();
  arraySubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.arrayHands = this.tableService.getArray();

    this.arraySubscription = this.userService.rangesSubject.subscribe(
      (arrayRanges: Pair<string, Pair<string, Hand[][]>[]>[]) => {

        //Modifier les index ici, faire une fonction qui donnera en fonction de l'identifiant pos-bb la bonne range à afficher

        this.arrayHands = arrayRanges[0].getValue()[0].getValue();
      }
    )

    this.userService.emitRanges();
  }

  ngOnDestroy(): void {
    this.arraySubscription.unsubscribe();
  }

}
