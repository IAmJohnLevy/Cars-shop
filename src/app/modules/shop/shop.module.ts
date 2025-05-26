import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { ShopComponent } from './components/shop/shop.component';




@NgModule({
  declarations: [
    FilterPanelComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    CarCardComponent
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
