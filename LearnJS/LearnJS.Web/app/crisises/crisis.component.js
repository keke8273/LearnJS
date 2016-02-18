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
var crisis_service_1 = require('./crisis.service');
var crisis_form_component_1 = require('./crisis-form.component');
var crisis_list_component_1 = require('./crisis-list.component');
var CrisisComponent = (function () {
    function CrisisComponent() {
    }
    CrisisComponent = __decorate([
        core_1.Component({
            selector: 'crisises',
            template: "\n        <h2>CRISIS CENTER</h2>\n        <router-outlet></router-outlet>    \n    ",
            directives: [router_1.RouterOutlet],
            providers: [crisis_service_1.CrisisService]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'CrisisCenter', component: crisis_list_component_1.CrisisListComponent, useAsDefault: true },
            { path: '/:sn', name: 'CrisisDetail', component: crisis_form_component_1.CrisisFormComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], CrisisComponent);
    return CrisisComponent;
})();
exports.CrisisComponent = CrisisComponent;
//# sourceMappingURL=crisis.component.js.map