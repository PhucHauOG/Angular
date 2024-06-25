import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/service/feature-service/feature-service';
import { GamesService } from 'src/app/service/game-service/games.service';
import { FeatureGame } from 'src/app/shared/model/feature/feature-game';
import { ProductGame } from 'src/app/shared/model/product/product-game';

@Component({
  selector: 'app-featured-game',
  templateUrl: './featured-game.component.html',
  styleUrls: ['./featured-game.component.scss']
})
export class FeaturedGameComponent implements OnInit {
  productgame: ProductGame[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {

  }
  search() {
    this.gameService.searchSubject.subscribe((query) => {
      if (query != "") {
        this.gameService.search(query).subscribe((game => this.productgame = game));
        console.log(query)
      }
    })
  }
}
