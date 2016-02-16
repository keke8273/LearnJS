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
var Observable_1 = require('rxjs/Observable');
var HeroService = (function () {
    function HeroService(_http) {
        this._http = _http;
        //private _heroUrl = 'http://learnjsapi.azurewebsites.net/api/hero';
        this._heroUrl = 'http://localhost:53571/api/hero';
        //events
        this.heroAdded = new core_1.EventEmitter();
    }
    HeroService.prototype.getHeroes = function () {
        return this._http.get(this._heroUrl)
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (data) { console.log(data); return data; });
    };
    HeroService.prototype.addHero = function (name, power, alterEgo) {
        var _this = this;
        var newHero = { "serialNumber ": -1, "name": name, "power": power, "alterEgo": alterEgo };
        var body = JSON.stringify(newHero);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._heroUrl, body, options)
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (data) { console.log(data); _this.heroAdded.emit(data); return data; });
    };
    HeroService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HeroService.prototype, "heroAdded", void 0);
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
})();
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map