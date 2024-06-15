import { Component, Input } from '@angular/core';
import { HomeLink } from '../../pages/home/data.homelinks';
import { RatestarsComponent } from '../ratestars/ratestars.component';

@Component({
  selector: 'app-homelink-card',
  standalone: true,
  imports: [ RatestarsComponent ],
  template: `
    @if (link) {
      <div class="app-homelink-card">
        <img class="app-homelink-card__img" [src]="link.img" />
        <a [href]="link.ref">{{ link.name }}</a>
        <p>{{ link.text }}</p>
        <p><app-ratestars [stars]="link.rate" />{{ link.rateText }}</p>
      </div>
    }
  `,
  styles: `
    .app-homelink-card {
      border: 1px solid black;
      margin:  5px;
      padding:  5px;
      min-height:  210px;
    }
    .app-homelink-card__img {
      max-width:  150px;
      max-height:  200px;
      margin:  5px;
      display: float;
      float: left;
    }
  `
})

export class HomelinkCardComponent {
  @Input() link!:HomeLink;
}
