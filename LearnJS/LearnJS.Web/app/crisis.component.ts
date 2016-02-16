import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http';

import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';
import {CrisisFormComponent} from './crisis-form.component';

@Component({
    selector: 'crisis-component',
    templateUrl: 'content/templates/crisis.component.html',
    directives: [CrisisFormComponent],
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .crisises {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 20em;
    }
    .crisises li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .crisises li.selected:hover {
      color: white;
    }
    .crisises li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .crisises .text {
      position: relative;
      top: -3px;
    }
    .crisises .badge {
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
    providers: [HTTP_PROVIDERS, CrisisService]
})
export class CrisisComponent implements OnInit {
    public crisises: Crisis[];
    public selectedCrisis: Crisis;

    constructor(private _service: CrisisService) {
    }

    getCrisises() {
        this._service.getCrisises().then(crisises => this.crisises = crisises);
    }

    ngOnInit() {
        this.getCrisises();
    }

    onSelect(crisis: Crisis) { this.selectedCrisis = crisis; }
}