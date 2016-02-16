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
var crisis_service_1 = require('./crisis.service');
var CrisisFormComponent = (function () {
    function CrisisFormComponent(_service) {
        this._service = _service;
        this.submitted = false;
        this.active = true;
    }
    CrisisFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
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
            templateUrl: 'content/templates/crisis-form.component.html',
            inputs: ['model']
        }), 
        __metadata('design:paramtypes', [crisis_service_1.CrisisService])
    ], CrisisFormComponent);
    return CrisisFormComponent;
})();
exports.CrisisFormComponent = CrisisFormComponent;
//# sourceMappingURL=crisis-form.component.js.map