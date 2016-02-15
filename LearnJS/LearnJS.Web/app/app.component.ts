import {Component, OnInit, Inject} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Hero} from './hero';
import {HeroComponent} from './hero.component';
import {CrisisComponent} from './crisis.component';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <div class="container">
                    <nav>
                        <a [routerLink] = "['CrisisCenter']">Crisis Center</a>
                        <a [routerLink] = "['Heroes']">Heroes</a>
                    </nav>              
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <router-outlet class="col-lg-8" style="color:blue"></router-outlet>
                        <div class="col-lg-2"></div>
                    </div>
                </div>`,
    directives: [CrisisComponent, HeroComponent],
})
@RouteConfig([
    { path: '/crisis-center', name: 'CrisisCenter', component: CrisisComponent },
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