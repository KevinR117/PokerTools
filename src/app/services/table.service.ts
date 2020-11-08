import { Injectable } from '@angular/core';
import { Hand } from '../models/hand.model';
import { Range } from '../models/range.model';

@Injectable()
export class TableService {

    range: Range = new Range();

    constructor() { }

    getArray(): Hand[][] {
        return this.range.handsArray;
    }
}