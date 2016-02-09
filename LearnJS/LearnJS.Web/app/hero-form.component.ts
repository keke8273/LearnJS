import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model:Hero = { "id": 18, "name": "Dr IQ", "power": this.powers[0], "alterEgo":'Chunck Overstreet'};
    //model = new Hero(18,  "Dr IQ 2", this.powers[0],'Chunck Overstreet');

    submitted = false;
    active = true;

    onSubmit() { this.submitted = true; }

    newHero() {
        //this.model = { "id": 18, "name": "", "power": "", "alterEgo": "" };

        this.model.name = "";
        this.model.power = "";
        this.model.alterEgo = "";

        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}