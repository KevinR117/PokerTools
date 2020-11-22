import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  @Input() card1: string;
  @Input() card2: string;
  @Input() suited: string;
  @Input() playCard: string;

  constructor() { }

  ngOnInit(): void {
  }

}
