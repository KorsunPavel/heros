import { Hero } from './hero';
import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
              <h2>My favoire hero is {{hero.name}}!</h2>
              <p>Heroes:</p>
              <ul >
                <li *ngFor='let hero of heroes'>
                  {{hero.name}}
                </li>
              </ul>
              <p *ngIf="heroes.length > 3">There are many heroes!</p>
              `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'), 
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
  hero = this.heroes[1];
}
