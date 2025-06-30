import { Injectable, Output } from "@angular/core";
import { Icar } from "../model/car";
import { ALL_CARS } from "../../db-data";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilterDataService {
  allCars: Icar[] = ALL_CARS;

  public searchStringValue: string = '';


  private filterBodystyleEnabledSource = new BehaviorSubject<boolean>(false);
  private filterSUVEnabledSource = new BehaviorSubject<boolean>(false);
  private filter2DEnabledSource = new BehaviorSubject<boolean>(false);

  filterBodystyleEnabled$ = this.filterBodystyleEnabledSource.asObservable();
  filterSUVEnabled$ = this.filterSUVEnabledSource.asObservable();
  filter2DEnabled$ = this.filter2DEnabledSource.asObservable();

  constructor() {}

  setFilterBodystyleEnabled(value: boolean) {
    this.filterBodystyleEnabledSource.next(value);
    if (!value) {
      this.filterSUVEnabledSource.next(false);
      this.filter2DEnabledSource.next(false);
    }
  }

  setFilterSUVEnabled(value: boolean) {
    this.filterSUVEnabledSource.next(value);
  }

  setFilter2DEnabled(value: boolean) {
    this.filter2DEnabledSource.next(value);
  }

  getFilteredCars(): Observable<Icar[]> {
    return new Observable<Icar[]>((subscriber) => {
      let subscriptionBodystyle: Subscription;
      let subscriptionSUV: Subscription;
      let subscription2D: Subscription;
      subscriptionBodystyle = this.filterBodystyleEnabled$.subscribe((filterBodystyleEnabled) => {
        subscriptionSUV = this.filterSUVEnabled$.subscribe((filterSUVEnabled) => {
          subscription2D = this.filter2DEnabled$.subscribe((filter2DEnabled) => {
            let filteredCars = [...this.allCars];
            if (filterBodystyleEnabled) {
              if (filterSUVEnabled) {
                filteredCars = filteredCars.filter(
                  (car) => car.bodystyle === "SUV"
                );
              }
              if (filter2DEnabled) {
                filteredCars = filteredCars.filter(
                  (car) => car.bodystyle === "2D Chassis"
                );
              }
            }
            if (this.searchStringValue) {
              filteredCars = filteredCars.filter(
                  (car) => car.description.includes(this.searchStringValue)
                );
            }
            subscriber.next(filteredCars);
          });
        });
      });

      return () => {
        subscriptionBodystyle.unsubscribe();
        subscriptionSUV.unsubscribe();
        subscription2D.unsubscribe();
      };
    });
  }
}
