import { Component, Input, signal, computed } from "@angular/core";
import { FilterDataService } from "../../../../services/filter-data.service";

export interface Filter {
  name: string;
  need: boolean;
  subfilters?: Filter[];
}

@Component({
  selector: "app-filter-panel",
  standalone: false,
  templateUrl: "./filter-panel.component.html",
  styleUrl: "./filter-panel.component.scss",
})
export class FilterPanelComponent {
  filterToggleValue: string = '';
  filtersOn: boolean = false;

  onFilterToggleChange(event: any) {
    const value = event.value;
    if (value === 'useFilters') {
      this.filtersOn = true;
    } else if (value === 'disableFilters') {
      this.filtersOn = false;
      this.isFilterBodystyleEnabled = false;
      this.isFilterSUVEnabled = false;
      this.isFilter2DEnabled = false;
      this.filterDataService.setFilterBodystyleEnabled(false);
      this.filterDataService.setFilterSUVEnabled(false);
      this.filterDataService.setFilter2DEnabled(false);
    }
  }

  constructor(private filterDataService: FilterDataService) {}

  isFilterBodystyleEnabled: boolean = false;
  isFilterSUVEnabled: boolean = false;
  isFilter2DEnabled: boolean = false;

  onFilterBodystyleToggle() {
    this.filterDataService.setFilterBodystyleEnabled(
      this.isFilterBodystyleEnabled
    );
  }

  onFilterSUVChange() {
    this.filterDataService.setFilterSUVEnabled(this.isFilterSUVEnabled);
  }

  onFilter2DChange() {
    this.filterDataService.setFilter2DEnabled(this.isFilter2DEnabled);
  }
}
