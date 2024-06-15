import { Component } from '@angular/core';
import { homeLinks, type HomeLink } from './data.homelinks';
import { HomelinkCardComponent } from '../../components/homelink-card/homelink-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomelinkCardComponent],
  template: `
    <div class="app-home__headwrapper">
      <img class="app-home__altnamesimg" src="./vertical_scroll.png" />
      <div class="app-home__altnames">
        <strong>Альтернативные названия: </strong>A Record of a Mortal's Journey
        to Immortality / 학사신공 / Fan Ren Xiu Xian Chuan / На пути к
        бессмертию / 凡人修仙传 / Mortal Cultivator / Phàm Nhân Tu Tiên / I Will
        Become an Immortal / 学士神功 / A Record of a Mortal Journey to
        Immortality
      </div>
    </div>
    <hr />
    @for (link of this.links; track link.ref) {
      <app-homelink-card [link]="link"></app-homelink-card>
    }
  `,
  styles: `
    .app-home__altnamesimg {
      display: float;
      float: left;
      max-height: 100px;
      margin: 5px;
    }
    .app-home__altnames {
      display: block;
      margin: 5px;
      min-height: 110px;
      max-width:  600px;
    }
  `,
})
export class HomeComponent {
  links: HomeLink[] = homeLinks;
}
