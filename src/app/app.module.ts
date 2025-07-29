import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { ShopModule } from "./modules/shop/shop.module";
import { BasketModule } from "./modules/basket/basket.module";
import { CarCardComponent } from "./components/car-card/car-card.component";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { CarDetailComponent } from './components/car-detail/car-detail.component';


@NgModule({
  declarations: [AppComponent, NavBarComponent, MainPageComponent, CarDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    AppRoutingModule,
    ShopModule,
    BasketModule,
    CarCardComponent,
  ],
  providers: [ provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
