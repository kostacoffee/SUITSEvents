<template lang="pug">
	div.container
		login-form(v-on:loggedIn="redirectToMenu")
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
	name: 'login-view',
	components: {
		'login-form': LoginForm
	},
	methods: {
		redirectToMenu: function () {
			this.$router.push('/menu');
		}
	},
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

</style>
