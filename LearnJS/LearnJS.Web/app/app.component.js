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
var hero_component_1 = require('./heroes/hero.component');
var crisis_component_1 = require('./crisises/crisis.component');
var dialog_service_1 = require('./dialog.service');
var highlight_directive_1 = require('./attribute-directives/highlight.directive');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n                <nav>\n                    <a [routerLink] = \"['CrisisCenter']\" [nbHighlight]=\"color\"><i class=\"fa fa-fire fa-fw\"></i>Crisis Center</a>\n                    <a [routerLink] = \"['Heroes']\" [nbHighlight]=\"color\"><i class=\"fa fa-users fa-fw\"></i> Heroes</a>\n                </nav>\n                <svg width=\"150\" height=\"50\">\n                  <rect x=\"5\" y=\"25\" rx=\"5\" ry=\"5\" width=\"15\" height=\"15\" stroke=\"black\" stroke-width=\"1\" fill=\"yellow\" (click)=\"color='yellow'\"/>\n                  <rect x=\"25\" y=\"25\" rx=\"5\" ry=\"5\" width=\"15\" height=\"15\" stroke=\"black\" stroke-width=\"1\" fill=\"cyan\" (click)=\"color='cyan'\"/>\n                  <rect x=\"45\" y=\"25\" rx=\"5\" ry=\"5\" width=\"15\" height=\"15\" stroke=\"black\" stroke-width=\"1\" fill=\"lightgreen\" (click)=\"color='lightgreen'\"/>\n                  <text x=\"5\" y=\"10\" font-size=\"10\">Pick a highlight color</text>\n                </svg>  \n                <div class=\"container\">\n                    <router-outlet></router-outlet>\n                </div>",
            providers: [dialog_service_1.DialogService],
            directives: [crisis_component_1.CrisisComponent, hero_component_1.HeroComponent, router_1.ROUTER_DIRECTIVES, highlight_directive_1.HighlightDirective],
        }),
        router_1.RouteConfig([
            { path: '/crisis-center/...', name: 'CrisisCenter', component: crisis_component_1.CrisisComponent, useAsDefault: true },
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