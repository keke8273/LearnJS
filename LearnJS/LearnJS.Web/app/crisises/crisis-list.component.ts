import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteParams} from 'angular2/router';

import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';
import {CrisisFormComponent} from './crisis-form.component';

@Component({
    selector: 'crisis-list',
    template: `
            <h2>CRISIS CENTER</h2>
            <ul class="crisis-list">
                <li *ngFor="#crisis of crisises"
                    [class.selected]="isSelected(crisis)"
                    (click)="onSelect(crisis)">
                    <span class="badge">{{crisis.serialNumber}}</span> {{crisis.name}}
                </li>
            </ul>`,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .crisis-list {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 20em;
    }
    .crisis-list li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.7em;
      border-radius: 4px;
    }
    .crisis-list li.selected:hover {
      color: white;
    }
    .crisis-list li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .crisis-list .text {
      position: relative;
      top: -3px;
    }
    .crisis-list .badge {
      display: inline-block;
      font-size: small;
      width: 3em;
      text-align: center;
      color: white;
      padding: 0.5em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;   
      border-radius: 4px 0px 0px 4px;
    }
  `]
})
export class CrisisListComponent implements OnInit {
    public crisises: Crisis[];
    public selectedCrisis: Crisis;

    private _selectedSn: number;

    constructor(private _service: CrisisService,
                private _router: Router,
                routeParams: RouteParams) {
        this._selectedSn = + routeParams.get('sn');
    }

    isSelected(crisis: Crisis) { return crisis.serialNumber === this._selectedSn;}

    getCrisises() {
        this._service.getCrisises().then(crisises => this.crisises = crisises);
    }

    ngOnInit() {
        this.getCrisises();
    }

    onSelect(crisis: Crisis) {
        this._router.navigate(['CrisisDetail', {sn: crisis.serialNumber}]);
    }
}