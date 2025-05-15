import { Component } from "@angular/core";
import { SystemValueService } from "./services/system-value.service";
import { PageName } from "./enums/page-name";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: false,
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "cars-shop";
  currentPage: PageName = PageName.MainPage;
  constructor(private systemValueService: SystemValueService) {}

  ngOnInit() {
    this.systemValueService.currentPage.subscribe((currentPage) => {
      this.currentPage = currentPage;
    });
  }
}
