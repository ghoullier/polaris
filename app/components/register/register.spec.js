System.register(['angular2/testing', './register'], function(exports_1) {
    var testing_1, register_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (register_1_1) {
                register_1 = register_1_1;
            }],
        execute: function() {
            testing_1.describe('Register Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(register_1.Register).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=register.spec.js.map