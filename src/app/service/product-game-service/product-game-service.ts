import { Injectable } from "@angular/core";
import { ProductGame } from "src/app/shared/model/product-game";

@Injectable({
    providedIn: 'root'
})

export class ProductGameService {
    constructor() { }

    getAll(): ProductGame[] {
        return [
            {
                id: '1',
                name: 'The Legend of Zelda: Breath of the Wild',
                image: '/assets/img/zelda-botw.jpg',
                description: 'Explore the vast open world of Hyrule in this critically acclaimed adventure',
                price: '$59.99'
            },
            {
                id: '2',
                name: 'Super Mario Odyssey',
                image: '/assets/img/mario-odyssey.jpg',
                description: 'Join Mario on a thrilling adventure across various kingdoms to rescue Princess Peach',
                price: '$59.99'
            },
            {
                id: '3',
                name: 'Super Smash Bros. Ultimate',
                image: '/assets/img/smash-bros-ultimate.jpg',
                description: 'Fight it out with your favorite Nintendo characters in this iconic fighting game',
                price: '$59.99'
            },
            {
                id: '4',
                name: 'Mario Kart 8 Deluxe',
                image: '/assets/img/mario-kart-8-deluxe.jpg',
                description: 'Race with your favorite Nintendo characters in this high-speed karting game',
                price: '$59.99'
            },
            {
                id: '5',
                name: 'Super Mario 3D World + Bowser`s Fury',
                image: '/assets/img/super-mario-3d-world-bowsers-fury.jpg',
                description: 'Experience two Mario adventures in one game, including the new Bowser`s Fury mode',
                price: '$20'
            },
            {
                id: '6',
                name: 'Mario Tennis Aces',
                image: '/assets/img/mario-tennis-aces.jpg',
                description: 'Compete in intense tennis matches with Mario and friends',
                price: '$10'
            },
            {
                id: '7',
                name: 'Paper Mario: The Origami King',
                image: '/assets/img/paper-mario-the-origami-king.jpg',
                description: 'Embark on a colorful paper-crafted adventure to stop King Olly`s origami plot',
                price: '$25'
            },
            {
                id: '8',
                name: 'Mario Party Superstars',
                image: '/assets/img/mario-party-superstars.jpg',
                description: 'Enjoy classic Mario Party boards and minigames with updated graphics and features',
                price: '$30'
            },
            {
                id: '9',
                name: 'Luigi`s Mansion 3',
                image: '/assets/img/luigis-mansion-3.jpg',
                description: 'Help Luigi rescue his friends from the haunted Last Resort hotel in this spooky adventure',
                price: '$30'
            },
            {
                id: '10',
                name: 'The Legend of Zelda: Link`s Awakening',
                image: '/assets/img/zelda-links-awakening.jpg',
                description: 'Embark on a classic adventure with Link to awaken the Wind Fish and escape Koholint Island',
                price: '$15'
              },
              {
                id: '11',
                name: 'The Legend of Zelda: Skyward Sword HD',
                image: '/assets/img/zelda-skyward-sword-hd.jpg',
                description: 'Experience the origin of the Master Sword in this high-definition remaster',
                price: '$20'
              },
              {
                id: '12',
                name: 'Hyrule Warriors: Age of Calamity',
                image: '/assets/img/hyrule-warriors-age-of-calamity.jpg',
                description: 'Join the fight to prevent the kingdom`s destruction in this action-packed prequel to Breath of the Wild',
                price: '$25'
              },
              {
                id: '13',
                name: 'The Legend of Zelda: Twilight Princess HD',
                image: '/assets/img/zelda-twilight-princess-hd.jpg',
                description: 'Return to the land of Hyrule and save it from darkness in this high-definition remaster',
                price: '$20'
              },
              {
                id: '14',
                name: 'Cadence of Hyrule: Crypt of the NecroDancer Featuring The Legend of Zelda',
                image: '/assets/img/cadence-of-hyrule.jpg',
                description: 'Embark on a rhythmic adventure through the world of Hyrule in this unique crossover',
                price: '$15'
              },
              {
                id: '15',
                name: 'Pokémon Sword',
                image: '/assets/img/pokemon-sword.jpg',
                description: 'Embark on a journey to become the Champion of the Galar region in this Pokémon RPG adventure',
                price: '$50'
              },
              {
                id: '16',
                name: 'Pokémon Shield',
                image: '/assets/img/pokemon-shield.jpg',
                description: 'Explore the Galar region and catch Pokémon to become the Champion in this RPG adventure',
                price: '$50'
              },
              {
                id: '17',
                name: 'Pokémon: Let`s Go, Pikachu!',
                image: '/assets/img/pokemon-lets-go-pikachu.jpg',
                description: 'Return to the Kanto region and embark on a journey with Pikachu in this Pokémon adventure',
                price: '$40'
              },
              {
                id: '18',
                name: 'Pokémon: Let`s Go, Eevee!',
                image: '/assets/img/pokemon-lets-go-eevee.jpg',
                description: 'Experience the Kanto region with Eevee as your partner in this Pokémon RPG',
                price: '$40'
              },
              {
                id: '19',
                name: 'New Pokémon Snap',
                image: '/assets/img/new-pokemon-snap.jpg',
                description: 'Capture photos of Pokémon in their natural habitats and uncover the mysteries of the Lental region',
                price: '$50'
              },
              {
                id: '20',
                name: 'Pokémon Mystery Dungeon: Rescue Team DX',
                image: '/assets/img/pokemon-mystery-dungeon-rescue-team-dx.jpg',
                description: 'Embark on a rescue team adventure as a Pokémon in this remake of the classic Mystery Dungeon games',
                price: '$40'
              },
              {
                id: '21',
                name: 'Pokémon Café ReMix',
                image: '/assets/img/pokemon-cafe-remix.jpg',
                description: 'Manage your own Pokémon café and serve delicious treats to adorable Pokémon customers',
                price: 'Free to play'
              },
              {
                id: '22',
                name: 'Pokémon Sword and Shield Expansion Pass',
                image: '/assets/img/pokemon-sword-shield-expansion-pass.jpg',
                description: 'Unlock new areas, Pokémon, and adventures with the expansion pass for Pokémon Sword and Shield',
                price: '$30'
              },
              {
                id: '23',
                name: 'Pokémon Quest',
                image: '/assets/img/pokemon-quest.jpg',
                description: 'Explore the blocky world of Tumblecube Island and befriend Pokémon in this free-to-play action RPG',
                price: 'Free to play'
              },
              {
                id: '24',
                name: 'Pokémon Unite',
                image: '/assets/img/pokemon-unite.jpg',
                description: 'Battle in 5v5 MOBA matches with your favorite Pokémon in this free-to-play multiplayer game',
                price: 'Free to play'
              }
        ]
    }

}