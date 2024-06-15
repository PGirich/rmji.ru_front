import { Component } from '@angular/core';
import { HomelinkCardComponent } from '../../components/homelink-card/homelink-card.component';
import { FanficLink, fanficLinks } from './data.fanficlinks';

@Component({
  selector: 'app-fanfic',
  standalone: true,
  imports: [ HomelinkCardComponent ],
  template: `
    <div>
    @for (link of this.links; track link.ref) {
      <app-homelink-card [link]="link"></app-homelink-card>
    }
    </div>
  `,
  styles: ``
})
export class FanficComponent {
  links: FanficLink[] = fanficLinks;
}
