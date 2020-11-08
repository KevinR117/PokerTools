import { Hand } from './hand.model';
import { Card } from './card.model';

export class Range {

    public handsArray: Hand[][];

    constructor() {
        this.handsArray = new Array<Hand[]>(13);
        for (let line = 0; line < 13; line++) {
            this.handsArray[line] = new Array<Hand>(13);
            for (let column = 0; column < 13; column++) {
                this.handsArray[line][column] = new Hand(Object.values(Card)[line], Object.values(Card)[column], false);
            }
        }
    }
}