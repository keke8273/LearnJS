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
var http_1 = require('angular2/http');
var crisis_service_1 = require('./crisis.service');
var crisis_form_component_1 = require('./crisis-form.component');
var CrisisComponent = (function () {
    function CrisisComponent(_service) {
        this._service = _service;
    }
    CrisisComponent.prototype.getCrisises = function () {
        var _this = this;
        this._service.getCrisises().then(function (crisises) { return _this.crisises = crisises; });
    };
    CrisisComponent.prototype.ngOnInit = function () {
        this.getCrisises();
    };
    CrisisComponent.prototype.onSelect = function (crisis) { this.selectedCrisis = crisis; };
    CrisisComponent = __decorate([
        core_1.Component({
            selector: 'crisis-component',
            templateUrl: 'content/templates/crisis.component.html',
            directives: [crisis_form_component_1.CrisisFormComponent],
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .crisises {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 20em;\n    }\n    .crisises li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .crisises li.selected:hover {\n      color: white;\n    }\n    .crisises li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .crisises .text {\n      position: relative;\n      top: -3px;\n    }\n    .crisises .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;   \n      border-radius: 4px 0px 0px 4px;\n    }\n  "],
            providers: [http_1.HTTP_PROVIDERS, crisis_service_1.CrisisService]
        }), 
        __metadata('design:paramtypes', [crisis_service_1.CrisisService])
    ], CrisisComponent);
    return CrisisComponent;
})();
exports.CrisisComponent = CrisisComponent;
//# sourceMappingURL=crisis.component.js.map