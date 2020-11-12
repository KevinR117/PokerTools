import { Range } from './range.model';
import { Hand } from './hand.model';
import { Position } from './position.model';
import { BlindCount } from './blind-count.model';
import { Pair } from './pair.model';

export class RangeArray {

    public rangesArray: Array<Pair<string, Array<Pair<string, Array<Array<Hand>>>>>>;

    constructor() {
        let bbCountArray: Array<Pair<string, Array<Array<Hand>>>> = new Array<Pair<string, Array<Array<Hand>>>>(3);
        for (let i = 0; i < 3; i++) {
            let range: Range = new Range();
            let handsArray: Hand[][] = range.handsArray;
            bbCountArray[i] = new Pair(Object.values(BlindCount)[i], handsArray);
        }

        let posArray: Array<Pair<string, Array<Pair<string, Array<Array<Hand>>>>>> = new Array<Pair<string, Array<Pair<string, Array<Array<Hand>>>>>>(6);
        for (let i = 0; i < 6; i++) {
            posArray[i] = new Pair(Object.values(Position)[i], bbCountArray)
        }
        
        this.rangesArray = posArray;
    }
}