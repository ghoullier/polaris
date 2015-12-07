System.register(['./components/login/login', './components/profile/profile', './components/register/register'], function(exports_1) {
    var login_1, profile_1, register_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            },
            function (register_1_1) {
                register_1 = register_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                login: {
                    path: '/login',
                    component: login_1.Login,
                    as: 'Login'
                },
                profile: {
                    path: '/profile',
                    component: profile_1.Profile,
                    as: 'Profile'
                },
                register: {
                    path: '/register',
                    component: register_1.Register,
                    as: 'Register'
                },
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (route) { return Routes[route]; }));
        }
    }
});
//# sourceMappingURL=routes.config.js.map