import { Component } from '@angular/core';
import { ALL_CARS } from "../../../../../db-data";
import { Icar } from '../../../../model/car';


@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})

export class ShopComponent {
  allCars = ALL_CARS;

  onCarSelected(car: Icar) {
    console.log("App component - click event bubbled...", car);
  }
}
