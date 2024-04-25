import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Nintendo Game Shop';
  games = [
    { id: 1, name: 'The Legend of Zelda: Breath of the Wild', image: 'zelda.jpg' },
    { id: 2, name: 'Super Mario Odyssey', image: 'mario.jpg' },
    { id: 3, name: 'Pokémon Sword', image: 'pokemon.jpg' },
    { id: 4, name: 'Mario Kart', image: 'mario_kart.jpg'}
  ];
}