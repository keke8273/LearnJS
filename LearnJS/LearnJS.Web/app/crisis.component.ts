import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http';

import {Crisis} from './hero';
import {CrisisService} from './crisis.service';
import {CrisisFormComponent} from './crisis-form.component';

@Component({
    selector: 'heroes',
    template: `
                <div class="col-lg-2">
                    <ul class="heroes">
                        <li *ngFor="#hero of heroes" 
                            [class.selected]="hero === selectedHero"
                            (click)="onSelect(hero)">
                            <span class="badge">{{hero.id}}</span> {{hero.name}}
                        </li>
                    </ul>
                </div>
                <div *ngIf="selectedHero">
                    <hero-form [hero]="selectedHero"></hero-form>
               </div>`,
    directives: [HeroFormComponent],
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;   
      border-radius: 4px 0px 0px 4px;
    }
  `],
   providers: [HTTP_PROVIDERS, HeroService]
})
export class HeroComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) {
        _heroService.heroAdded.subscribe(hero => this.heroes.push(hero));
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}