import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FeaturedGameComponent } from './page/featured-game/featured-game.component';
import { FooterComponent } from './component/footer/footer.component';
import { FooterHeadingComponent } from './component/footer-heading/footer-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedGameComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterHeadingComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
