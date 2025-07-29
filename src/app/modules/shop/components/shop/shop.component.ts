import { Component, DestroyRef, inject, Input } from "@angular/core";
import { ICar } from "../../../../model/car";
import { FilterDataService } from "../../../../services/filter-data.service";
import { Subject, Subscription, takeUntil } from "rxjs";
import { CardContext } from "../../../../components/car-card/car-card.component";


@Component({
  selector: "app-shop",
  standalone: false,
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.scss",
})
export class ShopComponent {
  searchValue = "";
  cars: ICar[] = [];
  context!: CardContext;
  CardContext = CardContext;


  private readonly destroy$ = new Subject<void>();

  // private filterDataService = inject(FilterDataService);

  constructor(private filterDataService: FilterDataService) {}

  ngOnInit(): void {
    this.filterDataService
      .getFilteredCars()
      .pipe(takeUntil(this.destroy$))
      .subscribe((cars) => {
        this.cars = cars;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchTermChange(): void {
    const carsResults = this.cars.filter((car) =>
      car.description.includes(this.searchValue)
    );

    this.cars = [...carsResults];
  }

  onCarSelected(): void {
    console.log("car selected");
  }
}
