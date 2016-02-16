var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var hero_component_1 = require('./hero.component');
var crisis_component_1 = require('./crisis.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <nav>\n                            <a [routerLink] = \"['CrisisCenter']\">Crisis Center</a>\n                            <a [routerLink] = \"['Heroes']\">Heroes</a>\n                        </nav>     \n                    </div>         \n                    <div class=\"row\">\n                        <div class=\"col-lg-2\" style=\"background:blue\"></div>\n                        <router-outlet class=\"col-lg-8 centered\"></router-outlet>\n                        <div class=\"col-lg-2\" style=\"background:blue\"></div>\n                    </div>\n                </div>",
            directives: [crisis_component_1.CrisisComponent, hero_component_1.HeroComponent, router_1.ROUTER_DIRECTIVES],
        }),
        router_1.RouteConfig([
            { path: '/crisis-center', name: 'CrisisCenter', component: crisis_component_1.CrisisComponent },
            { path: '/heroes', name: 'Heroes', component: hero_component_1.HeroComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map