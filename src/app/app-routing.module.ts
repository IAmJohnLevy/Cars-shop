import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { PageLink } from "./enums/page-link";
import { ShopComponent } from "./modules/shop/components/shop/shop.component";
import { BasketComponent } from "./modules/basket/components/basket/basket.component";

const routes: Routes = [
  { component: MainPageComponent, path: PageLink.MainPage },
  { component: ShopComponent, path: PageLink.Shop },
  { component: BasketComponent, path: PageLink.Basket }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
