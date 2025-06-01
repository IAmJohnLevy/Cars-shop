import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icar } from '../../model/car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
  
})
export class CarCardComponent {
  @Input({
    required: true,
  })
  car!: Icar;

  @Output()
  carSelected = new EventEmitter<Icar>();

  onCardClicked() {
    console.log("card component - button clicked...");
    this.carSelected.emit(this.car);
    
  }
}
