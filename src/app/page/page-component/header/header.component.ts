import { Component, OnInit} from '@angular/core';
import { ProductGame } from 'src/app/shared/model/product-game';
import { ProductGameService } from 'src/app/service/product-game-service/product-game-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  searchphrase: string = '';

  productgame:ProductGame [] = [];
  filterproductgame:ProductGame [] = this.productgame;

  constructor(private pg: ProductGameService) {}

  ngOnInit(): void {
    this.search();
  }

  

  search() {
    this.filterproductgame = this.productgame.filter(
      productgame => productgame.name.toLocaleLowerCase().includes(this.searchphrase.toLowerCase())
    );  
  }
}