import { Range } from './range.model';
import { Hand } from './hand.model';
import { Position } from './position.model';
import { BlindCount } from './blind-count.model';
import { Pair } from './pair.model';

export class RangeArray {

    public rangesArray: Array<Pair<string, Array<Pair<string, Array<Array<Hand>>>>>>;

    constructor() {    
        let posArray: Array<Pair<string, Array<Pair<string, Array<Array<Hand>>>>>> = new Array<Pair<string, Array<Pair<string, Array<Array<Hand>>>>>>(6);
        for (let pos = 0; pos < 6; pos++) {
            let bbCountArray: Array<Pair<string, Array<Array<Hand>>>> = new Array<Pair<string, Array<Array<Hand>>>>(3);
            for (let bb = 0; bb < 3; bb++) {
                let range: Range = new Range();
                let handsArray: Hand[][] = range.handsArray;
                bbCountArray[bb] = new Pair(Object.values(BlindCount)[bb], handsArray);
            }
            posArray[pos] = new Pair(Object.values(Position)[pos], bbCountArray);
        }
        
        this.rangesArray = posArray;
    }
}