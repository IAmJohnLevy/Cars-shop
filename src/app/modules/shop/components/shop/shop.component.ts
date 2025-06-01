import { Component, Input } from "@angular/core";
import { Icar } from "../../../../model/car";
import { FilterDataService } from "../../../../services/filter-data.service";

@Component({
  selector: "app-shop",
  standalone: false,
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.scss",
})
export class ShopComponent {

  constructor(private filterDataService: FilterDataService) {}

  onCarSelected(car: Icar) {
    console.log("App component - click event bubbled...", car);
  }

  //new
    
  filteredCars: Icar[] = [];

  ngOnInit() {
    this.filterDataService.getFilteredCars().subscribe(cars => {
      this.filteredCars = cars;
    });
  }
}
