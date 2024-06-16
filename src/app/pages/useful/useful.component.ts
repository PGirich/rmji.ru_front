import { Component } from '@angular/core';
import { UsefulLink, usefulLinks } from './data.usefullinks';
import { HomelinkCardComponent } from '../../components/homelink-card/homelink-card.component';

@Component({
  selector: 'app-useful',
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

export class UsefulComponent {
  links: UsefulLink[] = usefulLinks;
}
