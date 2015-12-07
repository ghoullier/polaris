System.register(['angular2/testing', './upload'], function(exports_1) {
    var testing_1, upload_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (upload_1_1) {
                upload_1 = upload_1_1;
            }],
        execute: function() {
            testing_1.describe('Upload Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(upload_1.Upload).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=upload.spec.js.map