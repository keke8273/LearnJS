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
var mock_crisises_1 = require('./mock-crisises');
var CrisisService = (function () {
    function CrisisService() {
    }
    CrisisService.prototype.getCrisises = function () {
        return Promise.resolve(mock_crisises_1.CRISES);
    };
    // the | string token is a Pipe
    CrisisService.prototype.getCrisis = function (sn) {
        return Promise.resolve(mock_crisises_1.CRISES).then(function (cries) { return cries.filter(function (c) { return c.serialNumber === +sn; })[0]; });
    };
    CrisisService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CrisisService);
    return CrisisService;
})();
exports.CrisisService = CrisisService;
//# sourceMappingURL=crisis.service.js.map