import VueRouter from 'vue-router';

let view = function (name) {
	return function(resolve) {
		require(['./views/' + name + '.vue'], resolve);
	};
};

const routes = [
	{ path: '/login', component: view('LoginView') },
	{ 
		path: '/', component: view('Base'),
		children: [
			{
				path: '',
				component: view('EventMenu')
			},
			{
				path: '/event/:id',
				component: view('EventView')
			}
		]
	}
];

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
	let token = sessionStorage.getItem('token');
	if (to.path == '/login') {
		//login path is publically accessible, but if already logged in, go away
		if (token)
			next('/'); // if logged in, don't log in again
		else
			next();
	}
	else {
		if (token)
			next();
		else
			next('/login'); // If you're not logged in, go log in
	}
});

export default router
