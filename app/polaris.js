System.register(['angular2/core', 'angular2/router', './routes.config'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, routes_config_1;
    var PolarisApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routes_config_1_1) {
                routes_config_1 = routes_config_1_1;
            }],
        execute: function() {
            PolarisApp = (function () {
                function PolarisApp(router, location) {
                    this.router = router;
                    this.location = location;
                    this.defaultMeaning = 42;
                    router.navigate(['/Login']);
                }
                PolarisApp.prototype.meaningOfLife = function (meaning) {
                    return "The meaning of life is " + (meaning || this.defaultMeaning);
                };
                PolarisApp = __decorate([
                    core_1.Component({
                        selector: 'polaris-app',
                        providers: [],
                        templateUrl: 'app/polaris.html',
                        directives: [router_1.RouterOutlet, router_1.RouterLink],
                        pipes: [],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    router_1.RouteConfig(routes_config_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.Location])
                ], PolarisApp);
                return PolarisApp;
            })();
            exports_1("PolarisApp", PolarisApp);
        }
    }
});
//# sourceMappingURL=polaris.js.map