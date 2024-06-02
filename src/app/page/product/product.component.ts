import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product-service/product-service';
import { ProductGame } from 'src/app/shared/model/product/product-game';
import { CartService } from 'src/app/service/cart-service/cart-service';
import { GamesService } from 'src/app/service/game-service/games.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  productgame:ProductGame [] = [];
  search:string = "";

  displayGame(){
    return this.productgame.filter(g=>g.name.includes(this.search));
  }

  
  constructor(public pg:ProductService, public gamesService:GamesService) { }
  
  ngOnInit(): void {
    // this.productgame = this.pg.getAll();
    this.gamesService.gameSubject.subscribe((game) => {
      this.productgame = game;
    })
    this.gamesService.searchSubject.subscribe((query)=>{
      this.search = query;
    })
    this.getGames();
  }

  getGames(): void {
    this.gamesService.getGames();
  }

}