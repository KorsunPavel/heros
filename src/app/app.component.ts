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
              <div [ngClass]="{strike: classes}">[ngClass] binding to the classes property</div>
              <input [value]="hero.name" (input)="hero.name=$event.target.value" >
              <br>
              <div [ngClass]="currentClasses"  (click)="setCurrentClasses()" >This div is initially saveable, unchanged, and special</div>
              <input [(ngModel)]="hero.name">
              `
})
export class AppComponent {
    isSpecial: true;
    isUnchanged: true;
    canSave: false;
    classes = false;
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];
    hero = this.heroes[1];
    currentClasses: {};
    setCurrentClasses() {
        // CSS classes: added/removed per current state of component properties
        this.currentClasses = {
            saveable: this.canSave,
            modified: !this.isUnchanged,
            special: this.isSpecial
        };
    }
}
