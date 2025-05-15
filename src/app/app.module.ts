import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShopModule } from './modules/shop/shop.module';
import { BasketModule } from './modules/basket/basket.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    BasketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
