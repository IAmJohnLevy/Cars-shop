import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICar } from "../../model/car";
import { Router } from "@angular/router";
import { BasketService } from "../../services/basket-service";
import { CommonModule } from "@angular/common";

export enum CardContext {
  Shop = "shop",
  Basket = "basket"
}

enum CarCardLabel {
  WantToBuy = "Want to buy",
  DeleteFromBasket = "Delete from basket"
}
@Component({
  selector: "app-car-card",
  templateUrl: "./car-card.component.html",
  styleUrl: "./car-card.component.scss",
  imports: [CommonModule],
})
export class CarCardComponent {

  @Input({
    required: true,
  })
  car!: ICar;

  @Input() context!: CardContext;

  @Output()
  carSelected = new EventEmitter<ICar>();

  readonly carCardLabel = CarCardLabel;

  constructor(private router: Router, private basketService: BasketService) {}

  
  // onCardClicked() {
  //   console.log("card component - button clicked...");
  //   this.carSelected.emit(this.car);
  // }

  get isShopContext() {
    return this.context === CardContext.Shop
  }

  sendToBasket(car: ICar) {
    console.log("send to basket", this.car);
    this.basketService.addCar(car);
  }

  deleteFromBasket(car: ICar) {
    this.basketService.removeCar(car.id);
  }

  goToDetails(id: number) {
    this.router.navigate(["/item", id]);
  }
}
