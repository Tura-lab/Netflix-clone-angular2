import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hor-slider',
  templateUrl: './hor-slider.component.html',
  styleUrls: ['./hor-slider.component.css']
})
export class HorSliderComponent {
  @Input() title!: string;
  @Input() movies!: object[];

}
