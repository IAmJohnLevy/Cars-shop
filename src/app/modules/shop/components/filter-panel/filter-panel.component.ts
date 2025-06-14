import { Component, Input, signal, computed} from '@angular/core';
import { FilterDataService } from '../../../../services/filter-data.service';



export interface Filter {
  name: string;
  need: boolean;
  subfilters?: Filter[];
}

@Component({
  selector: 'app-filter-panel',
  standalone: false,
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss'
})

export class FilterPanelComponent {
  
  openFiltersClick() {

  }
  if () {
    
  }

  //new

  constructor(private filterDataService: FilterDataService) { }

  isFilterBodystyleEnabled: boolean = false;
  isFilterSUVEnabled: boolean = false;
  isFilter2DEnabled: boolean = false;

  onFilterBodystyleToggle() {
    this.filterDataService.setFilterBodystyleEnabled(this.isFilterBodystyleEnabled);
  }

  onFilterSUVChange() {
    this.filterDataService.setFilterSUVEnabled(this.isFilterSUVEnabled);
    // this.isFilter2Enabled = false; // not work as axpected
  }

  onFilter2DChange() {
    this.filterDataService.setFilter2DEnabled(this.isFilter2DEnabled);
    // this.isFilter1Enabled = false; // not work as axpected
  }
}

