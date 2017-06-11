import { Component } from '@angular/core';

@Component({
    selector: 'prefix-app',
    template: `
        <router-outlet></router-outlet>
        `
})
export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}
