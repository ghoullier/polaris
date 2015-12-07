System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './app/polaris'], function(exports_1) {
    var browser_1, core_1, router_1, polaris_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (polaris_1_1) {
                polaris_1 = polaris_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(polaris_1.PolarisApp, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map