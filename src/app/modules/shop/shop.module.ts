import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarCardComponent } from "../../components/car-card/car-card.component";
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { ShopComponent } from "./components/shop/shop.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';

import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [FilterPanelComponent, ShopComponent, FilterDialogComponent],
  imports: [
    CommonModule,
    CarCardComponent,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    MatInputModule
  ],
  exports: [ShopComponent, FilterPanelComponent],
})
export class ShopModule {}
