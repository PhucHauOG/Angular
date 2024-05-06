import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/page-component/header/header.component';
import { FeaturedGameComponent } from './page/featured-game/featured-game.component';
import { FooterComponent } from './page/page-component/footer/footer.component';
import { FooterHeadingComponent } from './page/page-component/footer-heading/footer-heading.component';
import { ProductComponent } from './page/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedGameComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterHeadingComponent,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
