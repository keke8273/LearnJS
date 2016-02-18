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
var CrisisListComponent = (function () {
    function CrisisListComponent(_service, _router, routeParams) {
        this._service = _service;
        this._router = _router;
        this._selectedSn = +routeParams.get('sn');
    }
    CrisisListComponent.prototype.isSelected = function (crisis) { return crisis.serialNumber === this._selectedSn; };
    CrisisListComponent.prototype.getCrisises = function () {
        var _this = this;
        this._service.getCrisises().then(function (crisises) { return _this.crisises = crisises; });
    };
    CrisisListComponent.prototype.ngOnInit = function () {
        this.getCrisises();
    };
    CrisisListComponent.prototype.onSelect = function (crisis) {
        this._router.navigate(['CrisisDetail', { sn: crisis.serialNumber }]);
    };
    CrisisListComponent = __decorate([
        core_1.Component({
            selector: 'crisis-list',
            template: "\n            <h2>CRISIS CENTER</h2>\n            <ul class=\"crisis-list\">\n                <li *ngFor=\"#crisis of crisises\"\n                    [class.selected]=\"isSelected(crisis)\"\n                    (click)=\"onSelect(crisis)\">\n                    <span class=\"badge\">{{crisis.serialNumber}}</span> {{crisis.name}}\n                </li>\n            </ul>",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .crisis-list {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 20em;\n    }\n    .crisis-list li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.7em;\n      border-radius: 4px;\n    }\n    .crisis-list li.selected:hover {\n      color: white;\n    }\n    .crisis-list li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .crisis-list .text {\n      position: relative;\n      top: -3px;\n    }\n    .crisis-list .badge {\n      display: inline-block;\n      font-size: small;\n      width: 3em;\n      text-align: center;\n      color: white;\n      padding: 0.5em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;   \n      border-radius: 4px 0px 0px 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [crisis_service_1.CrisisService, router_1.Router, router_1.RouteParams])
    ], CrisisListComponent);
    return CrisisListComponent;
})();
exports.CrisisListComponent = CrisisListComponent;
//# sourceMappingURL=crisis-list.component.js.map