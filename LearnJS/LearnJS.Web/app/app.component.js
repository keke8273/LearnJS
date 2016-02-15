var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./hero.service');
var hero_form_component_1 = require('./hero-form.component');
var AppComponent = (function () {
    function AppComponent(_heroService) {
        var _this = this;
        this._heroService = _heroService;
        this.title = 'Tour of Heroes';
        _heroService.heroAdded.subscribe(function (hero) { return _this.heroes.push(hero); });
    }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n                <div class=\"container\">\n                    <nav>\n                        <a [routerLink] = \"['CrisisCenter']\">Crisis Center</a>\n                        <a [routerLink] = \"['Heroes']\">Heroes</a>\n                    </nav>              \n                    <div class=\"row\">\n                        <div class=\"col-lg-2\"></div>\n                        <router-outlet class=\"col-lg-8\" style=\"color:blue\"></router-outlet>\n                        <div class=\"col-lg-2\"></div>\n                    </div>\n                </div>",
            directives: [hero_detail_component_1.HeroDetailComponent, hero_form_component_1.HeroFormComponent],
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 10em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;   \n      border-radius: 4px 0px 0px 4px;\n    }\n  "],
            providers: [http_1.HTTP_PROVIDERS, hero_service_1.HeroService]
        }),
        router_1.RouteConfig([])
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