import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedGameComponent } from './featured-game/featured-game.component';
import { FooterComponent } from './footer/footer.component';
import { FooterHeadingComponent } from './footer-heading/footer-heading.component';

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
