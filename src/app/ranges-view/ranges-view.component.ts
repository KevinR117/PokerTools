import { Component, OnInit } from '@angular/core';
import { Hand } from '../models/hand.model';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-ranges-view',
  templateUrl: './ranges-view.component.html',
  styleUrls: ['./ranges-view.component.scss']
})

export class RangesViewComponent implements OnInit {

  arrayHands: Hand[][];
  
  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.arrayHands = this.tableService.getArray();
    console.log(this.arrayHands);
  }

}
