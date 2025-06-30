import { Component, Input } from "@angular/core";
import { Icar } from "../../../../model/car";
import { FilterDataService } from "../../../../services/filter-data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: "app-shop",
  standalone: false,
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.scss",
})
export class ShopComponent {

  searchStringValue: string = '';

  constructor(private filterDataService: FilterDataService) {}

  onCarSelected(car: Icar) {
    console.log("App component - click event bubbled...", car);
  }
    
  filteredCars: Icar[] = [];
  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.filterDataService.getFilteredCars().subscribe(cars => {
      this.filteredCars = cars;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onInputChange() {
    this.filterDataService.searchStringValue = this.searchStringValue;
    console.log('Значение сохранено в сервисе:', this.filterDataService.searchStringValue);
    this.subscription = this.filterDataService.getFilteredCars().subscribe(cars => {
      this.filteredCars = cars;
    });
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
