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
var hero_service_1 = require('./hero.service');
var HeroFormComponent = (function () {
    function HeroFormComponent(_heroService) {
        this._heroService = _heroService;
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        this.submitted = false;
        this.active = true;
    }
    HeroFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._heroService.addHero(this.model.name, this.model.power, this.model.alterEgo);
    };
    HeroFormComponent.prototype.newHero = function () {
        var _this = this;
        this.model = { "serialNumber": -1, "name": "", "power": "", "alterEgo": "" };
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent = __decorate([
        core_1.Component({
            selector: 'hero-form',
            templateUrl: 'content/templates/hero-form.component.html',
            inputs: ['model']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroFormComponent);
    return HeroFormComponent;
})();
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map