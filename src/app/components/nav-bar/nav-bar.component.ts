import { Component } from '@angular/core';
import { PageLink } from '../../enums/page-link';
import { PageName } from '../../enums/page-name';
import { BasketService } from '../../services/basket-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  pageLink = PageLink;
  pageName = PageName;
  carsInBasket!: number;
  subscribeCarsBasketCount!: Subscription;

  constructor(private basketService: BasketService){}

  navLinkClicked(link:string) {
    // console.log(`clicked! ${link}`);
  }

  ngOnInit() {
    this.subscribeCarsBasketCount = this.basketService.totalValues$.subscribe(carsCount => {
      this.carsInBasket = carsCount.countCars;
    });
  }

  ngOnDestroy() {
    this.subscribeCarsBasketCount.unsubscribe();
  }
}