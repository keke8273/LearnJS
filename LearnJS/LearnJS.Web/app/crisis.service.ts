import {Injectable, EventEmitter, Output} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Crisis} from './crisis';
import {Observable} from 'rxjs/Observable';
import {CRISISES} from './mock-crisises';


@Injectable()
export class CrisisService{

    getCrisises() {
        return Promise.resolve(CRISISES);
    }
}