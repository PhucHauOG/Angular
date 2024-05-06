import { Component, OnInit } from '@angular/core';
import { ProductGameService } from 'src/app/service/product-game-service/product-game-service';
import { ProductGame } from 'src/app/shared/model/product-game';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  productgame:ProductGame [] = [];
  filteredProducts:ProductGame [] = this.productgame;
  
  constructor(private pg:ProductGameService) { }

  ngOnInit(): void {
    this.productgame = this.pg.getAll();

  }

  onSearch(searchphrase: string): void {
    this.filteredProducts = this.productgame.filter(productgame =>
      productgame.name.toLowerCase().includes(searchphrase.toLowerCase())
    );
  }
}