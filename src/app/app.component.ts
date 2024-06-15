import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="app-root__head">
      <img class="app-root__headimg" src="./rmji_letters.png" />
      <div class="app-root__headtext">
        <p class="app-root__title">ПУТЕШЕСТВИЕ К БЕССМЕРТИЮ</p>
        <p class="app-root__subtitle">{{ title }}</p>
      </div>

    </header>
    <div class="app-root__menu">
      <h4>
        <a
          routerLink=""
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >Главная</a
        >
        |
        <a routerLink="/useful" routerLinkActive="active">Полезные ссылки</a> |
        <a routerLink="/fanfic" routerLinkActive="active">Фанфики</a>
      </h4>
      <router-outlet />
    </div>
  `,
  styles: `
    .app-root__headimg {
      display: inline-block;
      margin:  5px;
      max-height:  50px;
    }
    .app-root__headtext {
      display: inline-block;
      margin:  1px;
    }
    .app-root__title {
      font-size:  40px;
      font-weight:  bold;
    }
    .app-root__subtitle {
      font-size:  14px;
    }

    a {padding: 5px; color:green}
    .active {color:black;}`,
})

export class AppComponent {
  title =
    'Фан-сайт веб-новеллы Путешествие к бессмертию (Record of mortal journey to immortality)';
}
