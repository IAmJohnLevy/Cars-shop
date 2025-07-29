import { Component, Input, OnInit } from "@angular/core";
import { FilterDataService } from "../../services/filter-data.service";
import { MultimediaService } from "../../services/multimedia-service";
import { ActivatedRoute } from "@angular/router";
import { ICar } from "../../model/car";
import { Location } from "@angular/common";

@Component({
  selector: "app-car-detail.component",
  standalone: false,
  templateUrl: "./car-detail.component.html",
  styleUrl: "./car-detail.component.scss",
})
export class CarDetailComponent implements OnInit {
  videos: any;
  carId!: number;
  allCars!: ICar[];
  currentCar?: ICar | undefined;

  constructor(
    private filterDataService: FilterDataService,
    private multimediaService: MultimediaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  search(query: string) {
    this.multimediaService.searchVideos(query).subscribe((response) => {
      this.videos = response.items;
      console.dir(this.videos);
    });
  }

  sendToBasket() {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.carId = +this.route.snapshot.paramMap.get("id")!;
    this.allCars = this.filterDataService.allCars;
    this.currentCar = this.allCars.find((el) => el.id === this.carId);

    if (this.currentCar) {
      this.videos = this.search(this.currentCar.description);
      console.log(this.videos);
    }
  }
}
