import { RouteDefinition } from 'angular2/router';
import { Login } from './components/login/login';
import { Profile } from './components/profile/profile';
import { Register } from './components/register/register';

export var Routes = {
	login: {
		path: '/login',
		component: Login,
		as: 'Login'
	},
	profile: {
		path: '/profile',
		component: Profile,
		as: 'Profile'
	},
	register: {
		path: '/register',
		component: Register,
		as: 'Register'
	},
};

export const APP_ROUTES: RouteDefinition[] = Object.keys(Routes).map((route) => Routes[route]);
