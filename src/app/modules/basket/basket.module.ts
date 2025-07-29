import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasketComponent } from "./components/basket/basket.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDividerModule } from "@angular/material/divider";
import { CarCardComponent } from "../../components/car-card/car-card.component";

@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    CarCardComponent
  ],
  exports: [BasketComponent],
})
export class BasketModule {}
