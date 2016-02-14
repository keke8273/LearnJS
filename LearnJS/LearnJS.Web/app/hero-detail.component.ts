import {Component} from 'angular2/core'
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'hero-detail',
    template: `<div *ngIf="hero">
                    <h2>{{hero.name}} details</h2>
                    <div><label>id: </label>{{hero.serialNumber}}</div>
                    <div>
                        <label>name: </label>
                        <div><input [(ngModel)]="hero.name" placeholder="name"></div>
                    </div>
               </div>`,
    inputs: ['hero']
})
export class HeroDetailComponent {
    public hero: Hero;
}