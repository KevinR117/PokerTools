import { Card } from './card.model'

export class Hand {
    constructor(
        public card1: Card,
        public card2: Card,
        public suited: boolean
    ) { }
}