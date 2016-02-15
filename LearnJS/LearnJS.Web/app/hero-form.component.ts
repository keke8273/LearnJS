import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html',
    inputs: ['hero']
})
export class HeroFormComponent {
    constructor(private _heroService: HeroService) { }

    public hero: Hero;

    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
        this._heroService.addHero(this.hero.name, this.hero.power, this.hero.alterEgo);
    }

    newHero() {
        this.hero.name = "";
        this.hero.power = "";
        this.hero.alterEgo = "";

        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.hero); }
}