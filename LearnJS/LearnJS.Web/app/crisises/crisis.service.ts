import {Injectable} from 'angular2/core';
import {CRISES} from './mock-crisises';

@Injectable()
export class CrisisService {

    getCrisises() {
        return Promise.resolve(CRISES);
    }

    // the | string token is a Pipe
    getCrisis(sn: number | string) {
        return Promise.resolve(CRISES).then(cries => cries.filter(c => c.serialNumber === +sn)[0]);
    }
}