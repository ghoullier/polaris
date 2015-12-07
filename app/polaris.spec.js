System.register(['angular2/testing', '../app/polaris'], function(exports_1) {
    var testing_1, polaris_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (polaris_1_1) {
                polaris_1 = polaris_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [polaris_1.PolarisApp]; });
            testing_1.describe('App: Volunteers', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([polaris_1.PolarisApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([polaris_1.PolarisApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=polaris.spec.js.map