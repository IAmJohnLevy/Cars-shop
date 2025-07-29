import { Injectable } from "@angular/core";
import { ICar } from "../model/car";
import { BehaviorSubject } from "rxjs";

export interface TotalValues {
  countCars: number;
  price: number;
}

@Injectable({
  providedIn: "root",
})
export class BasketService {
  private selectedCars = new BehaviorSubject<ICar[]>([]);
  private totalValues = new BehaviorSubject<TotalValues>({
    countCars: 0,
    price: 0,
  });
  selectedCars$ = this.selectedCars.asObservable();
  totalValues$ = this.totalValues.asObservable();

  constructor() {}

  get chosenCars(): ICar[] {
    return this.selectedCars.value;
  }

  get totals(): TotalValues {
    return this.totalValues.value;
  }

  addCar(car: ICar):void {
    const updatedCars = [...this.chosenCars, car];
    this.selectedCars.next(updatedCars);
    const updatedTotals: TotalValues = {
      countCars: this.totals.countCars + 1,
      price: this.totals.price + car.price,
    };
    this.totalValues.next(updatedTotals);

    console.log("in basket: ", this.totals.countCars);
  }

  removeCar(carId: number):void {
    const carToRemove = this.chosenCars.find(c => c.id === carId);
    if (!carToRemove) return;

    const updatedCars = this.chosenCars.filter(c => c.id !== carId);
    this.selectedCars.next(updatedCars);

    const updatedTotals: TotalValues = {
      countCars: this.totals.countCars - 1,
      price: this.totals.price - carToRemove.price,
    };
    this.totalValues.next(updatedTotals);
  }

  clearBasket():void {
    this.selectedCars.next([]);
    this.totalValues.next({
    countCars: 0,
    price: 0,
  });
  }
}
