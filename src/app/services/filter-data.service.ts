import { Injectable, Output } from "@angular/core";
import { ICar } from "../model/car";
import { ALL_CARS } from "../../db-data";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { FilterValue } from "../model/filterValue";

@Injectable({
  providedIn: "root",
})
export class FilterDataService {
  allCars: ICar[] = ALL_CARS;
  currentFiltersValue: FilterValue = {};
  checkboxStates: { [key: string]: boolean } = {};

  private filteredCars$ = new BehaviorSubject<ICar[]>([]);

  constructor(public dialog: MatDialog) {
    this.filteredCars$.next(this.allCars);
  }

  sliderStartValue: number = 24000;
  sliderEndValue: number = 90000;

  years: number[] = [...new Set(this.allCars.map((el) => el.year))];
  names: string[] = [...new Set(this.allCars.map((el) => el.name))];
  exteriorColor: string[] = [
    ...new Set(this.allCars.map((el) => el.exteriorColor)),
  ];
  features: string[] = [
    ...new Set(this.allCars.map((el) => el.features).flat()),
  ];

  engines: string[] = [...new Set(this.allCars.map((el) => el.engine))];
  automakers: string[] = [...new Set(this.allCars.map((el) => el.automaker))];
  transmissions: string[] = [
    ...new Set(this.allCars.map((el) => el.transmission)),
  ];

  bodystyles: string[] = [...new Set(this.allCars.map((el) => el.bodystyle))];

  filterCars(): void {
    let filteredCars: ICar[] = this.allCars;

    //рабочий блок если получить значения sliderStartValue и sliderEndValue
    filteredCars = filteredCars.filter(
      (car) => {
        return car.price >= this.sliderStartValue && car.price <= this.sliderEndValue
      }
    );

    this.filteredCars$.next([]);

    // console.log(this.currentFiltersValue);

    Object.keys(this.currentFiltersValue).forEach((field) => {
      filteredCars = filteredCars.filter((car) => {
        // if (car.price < this.sliderStartValue  ||  car.price > this.sliderEndValue) {
        //   return false;
        // }
        if (field === "features" && Array.isArray(car["features"])) {
          const selectedFeatures = Object.entries(
            this.currentFiltersValue["features"]
          )
            .filter(([_, value]) => value)
            .map(([key]) => key);

          return selectedFeatures.every((feature) =>
            (car["features"] as string[]).includes(feature)
          );
        }

        if (field in car) {
          return Object.entries(this.currentFiltersValue[field]).some(
            ([key, value]) => {
              return key === car[<keyof ICar>field]?.toString() && value;
            }
          );
        }

        return false;
      });
    });

    this.filteredCars$.next(filteredCars);
  }

  resetFilters(): void {
    this.filteredCars$.next(this.allCars);
    this.currentFiltersValue = {};
  }

  getFilteredCars(): Observable<ICar[]> {
    return this.filteredCars$;
  }

  logCurrentFiltersValue() {
    // console.dir(this.currentFiltersValue);
  }
}
