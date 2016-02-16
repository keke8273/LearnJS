import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'hero-form',
    templateUrl: 'content/templates/hero-form.component.html',
    inputs: ['model']
})
export class HeroFormComponent {
    constructor(private _heroService: HeroService) { }

    public model: Hero;

    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
        this._heroService.addHero(this.model.name, this.model.power, this.model.alterEgo);
    }

    newHero() {
        this.model.name = "";
        this.model.power = "";
        this.model.alterEgo = "";

        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}