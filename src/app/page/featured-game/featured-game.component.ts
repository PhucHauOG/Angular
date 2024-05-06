import { Component, OnInit } from '@angular/core';
import { FeatureGameService } from 'src/app/service/feature-game-service/feature-game-service';
import { FeatureGame } from 'src/app/shared/model/feature-game';

@Component({
  selector: 'app-featured-game',
  templateUrl: './featured-game.component.html',
  styleUrls: ['./featured-game.component.scss']
})
export class FeaturedGameComponent implements OnInit {
  featuregame:FeatureGame [] = [];
  filteredGames:FeatureGame [] = this.featuregame;

  constructor(private fg:FeatureGameService) { }

  ngOnInit(): void {
    this.featuregame = this.fg.getAll();

  }
  
  onSearch(searchphrase: string): void {
    this.filteredGames = this.featuregame.filter(featuredgames =>
      featuredgames.name.toLowerCase().includes(searchphrase.toLowerCase())
    );
  }
}
