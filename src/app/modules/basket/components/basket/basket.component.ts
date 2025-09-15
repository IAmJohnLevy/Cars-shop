import { Component } from "@angular/core";

@Component({
  selector: "app-basket",
  standalone: false,
  templateUrl: "./basket.component.html",
  styleUrl: "./basket.component.scss",
})
export class BasketComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
