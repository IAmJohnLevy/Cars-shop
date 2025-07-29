import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FilterDataService } from "../../../../services/filter-data.service";
import { FilterValue } from "../../../../model/filterValue";

@Component({
  selector: "filter-dialog",
  standalone: false,
  templateUrl: "./filter-dialog.component.html",
  styleUrl: "./filter-dialog.component.scss"})
export class FilterDialogComponent {
  currentFilterName: string;
  currentFiltersValue: FilterValue = {}; // type of FilterValue
  checkboxStates: Record<string, boolean> = {};
  filterNames: Record<string, string> = {
    name: "name",
    exteriorColor: "exteriorColor",
    year: "year",
    features: "features",
    automakers: "automaker",
    engines: "engine",
    transmissions: "transmission",
    bodystyles: "bodystyle",
  };

  years: number[];
  automakers: string[];
  engines: string[] = [];
  exteriorColors: string[] = [];
  transmissions: string[] = [];
  features: string[] = [];
  bodystyles: string[] = [];
  names: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { currentFilterName: string },
    private filterDataService: FilterDataService
  ) {
    this.years = this.filterDataService.years;
    this.exteriorColors = this.filterDataService.exteriorColor;
    this.names = this.filterDataService.names;
    this.features = this.filterDataService.features;
    this.automakers = this.filterDataService.automakers;
    this.engines = this.filterDataService.engines;
    this.transmissions = this.filterDataService.transmissions;
    this.bodystyles = this.filterDataService.bodystyles;

    this.currentFilterName = data.currentFilterName;
  }

  ngOnInit() {
    const filterKeyForData = this.filterNames[this.currentFilterName];
    const currentFilterValues =
      this.filterDataService.currentFiltersValue[filterKeyForData];

    if (currentFilterValues) {
      this.checkboxStates = { ...currentFilterValues };
    } else {
      let items: (string | number)[] = [];
      if (this.currentFilterName === "year") {
        items = this.years;
      } else if (this.currentFilterName === "exteriorColor") {
        items = this.exteriorColors;
      } else if (this.currentFilterName === "name") {
        items = this.names;
      } else if (this.currentFilterName === "features") {
        items = this.features;
      } else if (this.currentFilterName === "automakers") {
        items = this.automakers;
      } else if (this.currentFilterName === "engine") {
        items = this.engines;
      } else if (this.currentFilterName === "transmission") {
        items = this.transmissions;
      } else if (this.currentFilterName === "bodystyles") {
        items = this.bodystyles;
      }

      items.forEach((item) => {
        this.checkboxStates[item] = false;
      });
    }
  }

  onCheckToggle(filterField: string | number) {
    this.checkboxStates[filterField] = !this.checkboxStates[filterField];

    // Обновляем состояние в сервисе
    // this.filterDataService.setCheckboxStates(this.checkboxStates);
  }

  confirmDialog() {
    const filterKeyForData = this.filterNames[this.currentFilterName];

    this.filterDataService.currentFiltersValue[filterKeyForData] =
      this.checkboxStates;
    this.filterDataService.logCurrentFiltersValue();
    this.filterDataService.filterCars();
    // console.dir(this.automakers);
  }
}
