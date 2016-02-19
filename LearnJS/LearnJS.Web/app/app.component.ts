import {Component, OnInit, Inject} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Hero} from './heroes/hero';
import {HeroComponent} from './heroes/hero.component';
import {CrisisComponent} from './crisises/crisis.component';

import {DialogService} from './dialog.service';

import {HighlightDirective} from './attribute-directives/highlight.directive';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <nav>
                    <a [routerLink] = "['CrisisCenter']" [nbHighlight]="color"><i class="fa fa-fire fa-fw"></i>Crisis Center</a>
                    <a [routerLink] = "['Heroes']" [nbHighlight]="color"><i class="fa fa-users fa-fw"></i> Heroes</a>
                </nav>
                <svg width="150" height="50">
                  <rect x="5" y="25" rx="5" ry="5" width="15" height="15" stroke="black" stroke-width="1" fill="yellow" (click)="color='yellow'"/>
                  <rect x="25" y="25" rx="5" ry="5" width="15" height="15" stroke="black" stroke-width="1" fill="cyan" (click)="color='cyan'"/>
                  <rect x="45" y="25" rx="5" ry="5" width="15" height="15" stroke="black" stroke-width="1" fill="lightgreen" (click)="color='lightgreen'"/>
                  <text x="5" y="10" font-size="10">Pick a highlight color</text>
                </svg>  
                <div class="container">
                    <router-outlet></router-outlet>
                </div>`,
    providers:[DialogService],
    directives: [CrisisComponent, HeroComponent, ROUTER_DIRECTIVES, HighlightDirective],
})
@RouteConfig([
    { path: '/crisis-center/...', name: 'CrisisCenter', component: CrisisComponent, useAsDefault: true },
    { path: '/heroes', name: 'Heroes', component: HeroComponent},
])
export class AppComponent{
    public title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/