var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
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
        var id = +this._routeParams.get('id');
    };
    CrisisFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    CrisisFormComponent.prototype.routerCanDeactivate = function (next, prev) {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (!this.model || this.model === this.origin) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this._dialog.confirm('Discard changes?');
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
        })
    ], CrisisFormComponent);
    return CrisisFormComponent;
})();
exports.CrisisFormComponent = CrisisFormComponent;
//# sourceMappingURL=crisis-form.component.js.map