import {Injectable, EventEmitter, Output} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroService{

    constructor(private _http : Http){} 

    private _heroUrl = 'http://learnjsapi.azurewebsites.net/api/hero';
    //private _heroUrl = 'http://localhost:53571/api/hero';

    //events
    @Output() heroAdded: EventEmitter<Hero> = new EventEmitter();

    getHeroes() {
        return this._http.get(this._heroUrl)
            .toPromise()
            .then(res => <Hero[]>res.json(), this.handleError)
            .then(data => { console.log(data); return data; });
    }

    addHero(name: string, power: string, alterEgo?: string)
    {
        var newHero = { "serialNumber ": -1, "name": name, "power": power, "alterEgo": alterEgo };

        let body = JSON.stringify(newHero);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._heroUrl, body, options)
            .toPromise()
            .then(res => <Hero>res.json(), this.handleError)
            .then(data => { console.log(data); this.heroAdded.emit(data); return data; })
    }

    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}