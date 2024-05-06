import { Injectable } from "@angular/core"
import { FeatureGame } from "src/app/shared/model/feature-game"

@Injectable({
    providedIn: 'root'
})

export class FeatureGameService {
    constructor() { }

    getAll():FeatureGame[] {
        return [
            {
                name: 'The Legend of Zelda: Breath of the Wild',
                image: '/assets/img/zelda-botw.jpg',
                description: 'Explore the vast open world of Hyrule in this critically acclaimed adventure',
            },
            {
                name: 'Super Mario Odyssey',
                image: '/assets/img/mario-odyssey.jpg',
                description: 'Join Mario on a thrilling adventure across various kingdoms to rescue Princess Peach',
            },
            {
                name: 'Super Smash Bros. Ultimate',
                image: '/assets/img/smash-bros-ultimate.jpg',
                description: 'Fight it out with your favorite Nintendo characters in this iconic fighting game',
            }
        ]
    }
}
