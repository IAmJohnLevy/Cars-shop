import { Component, OnInit, OnDestroy } from "@angular/core";
import { BasketService } from "../../../../services/basket-service";
import { ICar } from "../../../../model/car";
import { TotalValues } from "../../../../services/basket-service";
import { Subscription } from "rxjs";
import { CardContext } from "../../../../components/car-card/car-card.component";

@Component({
  selector: "app-basket",
  standalone: false,
  templateUrl: "./basket.component.html",
  styleUrl: "./basket.component.scss",
})
export class BasketComponent implements OnInit, OnDestroy{
  hidden: boolean = false;
  chosenCars: ICar[] = [];
  totalValues!: TotalValues;
  subscribeCselectedCars!: Subscription;
  subscribeCtotalValues!: Subscription;
  CardContext = CardContext;

  constructor(private basketService: BasketService) {}

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit() {
    this.subscribeCselectedCars = this.basketService.selectedCars$.subscribe((cars) => {
      this.chosenCars = cars;
    });
    this.subscribeCtotalValues = this.basketService.totalValues$.subscribe((values) => {
      this.totalValues = values;
    });
  }

  ngOnDestroy() {
    this.subscribeCselectedCars.unsubscribe();
    this.subscribeCtotalValues.unsubscribe();
  }

  demo() {
    console.log(this.chosenCars);
  }

  clearBasket() {
    this.basketService.clearBasket();
  }

  confirmToBuy() {}

  hrefGenerate() {
    return `mailto:carsshop@gmail.com?subject=Confirm%20vehicles%20buy&body=Hello,%20I%20want%20to%20confirm%20${this.totalValues.countCars}%20vehicles%20to%20buy.`;
  }
}
