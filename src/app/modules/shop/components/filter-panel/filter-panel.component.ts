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
  if () {
    
  }

  //new

  constructor(private filterDataService: FilterDataService) { }

  isAllFilterEnabled: boolean = false;
  isFilterDisabled: boolean = false;
  isFilter1Enabled: boolean = false;
  isFilter2Enabled: boolean = false;

  onFilterToggle() {
    this.filterDataService.setFilterEnabled(this.isAllFilterEnabled);
  }

  onFilter1Change() {
    this.filterDataService.setFilter1Enabled(this.isFilter1Enabled);
    // this.isFilter2Enabled = false; // not work as axpected
  }

  onFilter2Change() {
    this.filterDataService.setFilter2Enabled(this.isFilter2Enabled);
    // this.isFilter1Enabled = false; // not work as axpected
  }
}

