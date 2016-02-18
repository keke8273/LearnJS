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
var dialog_service_1 = require('../dialog.service');
var crisis_1 = require('./crisis');
var crisis_service_1 = require('./crisis.service');
var CrisisFormComponent = (function () {
    function CrisisFormComponent(_service, _dialog, _router, _routeParams) {
        this._service = _service;
        this._dialog = _dialog;
        this._router = _router;
        this._routeParams = _routeParams;
        this.submitted = false;
        this.active = true;
    }
    CrisisFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sn = +this._routeParams.get('sn');
        this._service.getCrisis(sn).then(function (crisis) {
            if (crisis) {
                _this.origin = new crisis_1.Crisis(crisis);
                _this.model = crisis;
                // debug output
                console.log("crisis " + JSON.stringify(crisis));
                console.log("this.origin " + JSON.stringify(_this.origin));
                console.log("this.model " + JSON.stringify(_this.model));
            }
            else {
                _this.gotoCrisisCenter();
            }
        });
        //let crisis = this._service.getCrisis(sn);
        //if (crisis) {
        //        this.origin = new Crisis(crisis);
        //        this.model = crisis;
        //    }
        //    else {
        //        this.gotoCrisisCenter();
        //    }
    };
    CrisisFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.origin = this.model;
        this.gotoCrisisCenter();
    };
    CrisisFormComponent.prototype.onCancel = function () {
        this.model = this.origin;
        this.gotoCrisisCenter();
    };
    CrisisFormComponent.prototype.routerCanDeactivate = function (next, prev) {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (!this.model || this.model.name === this.origin.name) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this._dialog.confirm('Discard changes?');
    };
    CrisisFormComponent.prototype.gotoCrisisCenter = function () {
        var crisisSn = this.model ? this.model.serialNumber : null;
        this._router.navigate(['CrisisCenter', { sn: crisisSn }]);
    };
    Object.defineProperty(CrisisFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    CrisisFormComponent = __decorate([
        core_1.Component({
            selector: 'crisis-form',
            templateUrl: 'app/crisises/crisis-form.component.html',
            inputs: ['model']
        }), 
        __metadata('design:paramtypes', [crisis_service_1.CrisisService, dialog_service_1.DialogService, router_1.Router, router_1.RouteParams])
    ], CrisisFormComponent);
    return CrisisFormComponent;
})();
exports.CrisisFormComponent = CrisisFormComponent;
//# sourceMappingURL=crisis-form.component.js.map