import VueRouter from 'vue-router';

let view = function (name) {
	return function(resolve) {
		require(['./views/' + name + '.vue'], resolve);
	};
};

let tokenRequired = function (to, from, next) {
	if (!sessionStorage.getItem('token'))
		next('/login');
	else
		next();
};

const routes = [
	{ path: '/login', component: view('LoginView'),
		beforeEnter: function (to, from, next) {
			if (sessionStorage.getItem('token'))
				next('/menu');
			else
				next();
		}
	},
	{ path: '/menu', component: view('EventMenu'), beforeEnter: tokenRequired },
	{ path: '/', redirect: '/login' }
];


const router = new VueRouter({routes});

export default router
