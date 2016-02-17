import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';

@Component({
    selector: 'crisis-form',
    templateUrl: 'app/crisises/crisis-form.component.html',
    inputs: ['model']
})
export class CrisisFormComponent {
    constructor(private _service: CrisisService) { }

    public model: Crisis;

    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}