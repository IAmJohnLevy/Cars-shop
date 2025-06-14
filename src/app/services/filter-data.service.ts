import { Injectable, Output } from "@angular/core";
import { Icar } from "../model/car";
import { ALL_CARS } from "../../db-data";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilterDataService {
  allCars: Icar[] = ALL_CARS;

  private filterEnabledSource = new BehaviorSubject<boolean>(false);
  private filter1EnabledSource = new BehaviorSubject<boolean>(false);
  private filter2EnabledSource = new BehaviorSubject<boolean>(false);

  filterEnabled$ = this.filterEnabledSource.asObservable();
  filter1Enabled$ = this.filter1EnabledSource.asObservable();
  filter2Enabled$ = this.filter2EnabledSource.asObservable();

  constructor() {}

  setFilterEnabled(value: boolean) {
    this.filterEnabledSource.next(value);
    if (!value) {
      this.filter1EnabledSource.next(false);
      this.filter2EnabledSource.next(false);
    }
  }

  setFilter1Enabled(value: boolean) {
    this.filter1EnabledSource.next(value);
  }

  setFilter2Enabled(value: boolean) {
    this.filter2EnabledSource.next(value);
  }

  getFilteredCars(): Observable<Icar[]> {
    return new Observable<Icar[]>((subscriber) => {
      let subscription: Subscription;
      let subscription1: Subscription;
      let subscription2: Subscription;
      subscription = this.filterEnabled$.subscribe((filterEnabled) => {
        subscription1 = this.filter1Enabled$.subscribe((filter1Enabled) => {
          subscription2 = this.filter2Enabled$.subscribe((filter2Enabled) => {
            let filteredCars = [...this.allCars];
            if (filterEnabled) {
              if (filter1Enabled) {
                filteredCars = filteredCars.filter(
                  (car) => car.bodystyle === "SUV"
                );
              }
              if (filter2Enabled) {
                filteredCars = filteredCars.filter(
                  (car) => car.bodystyle === "2D Chassis"
                );
              }
            }
            subscriber.next(filteredCars);
          });
        });
      });

      return () => {
        subscription.unsubscribe();
        subscription1.unsubscribe();
        subscription2.unsubscribe();
      };
    });
  }
}
