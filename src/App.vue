<template lang="pug">
div#app(v-md-theme="'default'")
	div.container
		login-form
</template>

<script>
import 'babel-polyfill';

export default {
	name: 'app',
	components: {
		'login-form': (resolve) => {
			require(['./components/LoginForm.vue'], resolve);
		}
	},
	data () {
		return {}
	}
}
</script>

<style lang="sass">

.container
	display: flex
	justify-content: center
	align-items: center
	margin: auto
	margin-top: 5%
	height: 100%

body
	background-color: #f5f5f5

</style>
