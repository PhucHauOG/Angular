import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-game',
  templateUrl: './featured-game.component.html',
  styleUrls: ['./featured-game.component.scss']
})
export class FeaturedGameComponent implements OnInit {
  featuredGames = [
    {
      name: 'The Legend of Zelda: Breath of the Wild',
      image: 'zelda-botw.jpg',
      description: 'Explore the vast open world of Hyrule in this critically acclaimed adventure'
    },
    {
      name: 'Super Mario Odyssey',
      image: 'mario-odyssey.jpg',
      description: 'Join Mario on a thrilling adventure across various kingdoms to rescue Princess Peach'
    },
    {
      name: 'Super Smash Bros. Ultimate',
      image: 'smash-bros-ultimate.jpg',
      description: 'Fight it out with your favorite Nintendo characters in this iconic fighting game'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
