import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';
import {DialogService} from '../dialog.service';

import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';

@Component({
    selector: 'crisis-form',
    templateUrl: 'app/crisises/crisis-form.component.html',
    inputs: ['model']
})
export class CrisisFormComponent implements OnInit, CanDeactivate{

    public model: Crisis;
    public origin: Crisis;

    submitted = false;
    active = true;

    constructor(
        private _service: CrisisService,
        private _dialog: DialogService,
        private _router: Router,
        private _routeParams: RouteParams
    ) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._service.getCrisis(id).then(crisis => {
            if (crisis) {
                this.origin = crisis;
                this.model = crisis;
            }
            else {
                this.gotoCrisisCenter();
            }
        });
    }

    onSubmit() {
        this.submitted = true;
    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (!this.model || this.model === this.origin) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this._dialog.confirm('Discard changes?');
    }

    gotoCrisisCenter() {
        this._router.navigate(['CrisisCenter']);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}