import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{

    lastId = HEROES[HEROES.length - 1].id;

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    addHero(name: string, power: string, alterEgo?: string)
    {
        var newHero = { "id": ++this.lastId, "name": name, "power": power, "alterEgo": alterEgo };
        HEROES.push(newHero);
    }
}