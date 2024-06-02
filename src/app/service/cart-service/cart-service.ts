import { ProductGame } from "src/app/shared/model/product/product-game";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items: ProductGame[] = [];

    addToCart(productgame: ProductGame) {
        this.items.push(productgame);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
}