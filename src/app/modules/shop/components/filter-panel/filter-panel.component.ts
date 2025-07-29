import {
  Component,
  Inject,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  Attribute,
} from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FilterDataService } from "../../../../services/filter-data.service";
import { Dialog } from "@angular/cdk/dialog";
import { FilterDialogComponent } from "../filter-dialog/filter-dialog.component";
import { ALL_CARS } from "../../../../../db-data";

@Component({
  selector: "app-filter-panel",
  standalone: false,
  templateUrl: "./filter-panel.component.html",
  styleUrls: ["./filter-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPanelComponent implements OnInit {
  filterToggleValue: string = "";
  areFiltersEnabled: boolean = false;

  startValue: number = 24000;
  endValue: number = 90000;

  readonly dialog = inject(MatDialog);
  private readonly filterDataService = inject(FilterDataService);

  // constructor(private filterDataService: FilterDataService) {}

  sliderStartValueChanged(newSliderValue: string) {
    this.startValue = Number(newSliderValue);
    console.log(this.startValue);
    this.filterDataService.sliderStartValue = Number(newSliderValue);
    this.filterDataService.filterCars();
  }
  sliderEndValueChanged(newSliderValue: string) {
    this.endValue = Number(newSliderValue);
    console.log(this.endValue);
    this.filterDataService.sliderEndValue = Number(newSliderValue);
    this.filterDataService.filterCars();
  }

  onFilterToggleChange(event: any) {
    if (event.value === "useFilters") {
      this.areFiltersEnabled = true;
    } else {
      this.areFiltersEnabled = false;
    }
    if (event.value === "disableFilters") {
      this.filterDataService.resetFilters();
    }
  }

  openDialog(filterField: string) {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      data: { currentFilterName: filterField },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.dir(`Dialog result: "${result}"`);
    });
  }

  ngOnInit(): void {
    // this.filterDataService.sliderStartValue = Number(this.sliderStartValue);
    // this.filterDataService.sliderEndValue = Number(this.sliderEndValue);
  }
}
