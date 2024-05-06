import { Injectable } from "@angular/core";
import { ProductGame } from "src/app/shared/model/product-game";

@Injectable({
    providedIn: 'root'
})

export class ProductGameService {
    constructor() { }

    getAll():ProductGame[] {
        return [
            {
                id: '1',
                name: 'The Legend of Zelda: Breath of the Wild',
                image: '/assets/img/zelda-botw.jpg',
                description: 'Explore the vast open world of Hyrule in this critically acclaimed adventure',
                price: '$10'
            },
            {
                id: '2',
                name: 'Super Mario Odyssey',
                image: '/assets/img/mario-odyssey.jpg',
                description: 'Join Mario on a thrilling adventure across various kingdoms to rescue Princess Peach',
                price: '$10'
            },
            {
                id: '3',
                name: 'Super Smash Bros. Ultimate',
                image: '/assets/img/smash-bros-ultimate.jpg',
                description: 'Fight it out with your favorite Nintendo characters in this iconic fighting game',
                price: '$10'
            }
        ]
    }
    
}