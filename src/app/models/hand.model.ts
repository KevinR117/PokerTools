import { Card } from './card.model'

export class Hand {
    constructor(
        public card1: Card,
        public card2: Card,
        public suited: boolean
    ) { }
    
    areCardsEqual(): boolean {
        if (this.card1 == this.card2) {
            return true;
        } else {
            return false;
        }
    }
}