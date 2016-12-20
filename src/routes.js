import VueRouter from 'vue-router';


const routes = [
	{ path: '/login', component: view('LoginView') },
	{ path: '/menu', component: view('EventMenu') },
	{ path: '/', redirect: '/login' }
];

const router = new VueRouter({routes});

function view(name) {
	return function(resolve) {
		require(['./views/' + name + '.vue'], resolve);
	}
}

export default router
