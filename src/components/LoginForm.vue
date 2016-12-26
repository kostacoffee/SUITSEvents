<template lang="pug">
md-card.login-card
	form(v-on:submit.prevent="getToken")
		md-card-header
			div.md-title Log in
	
		md-card-content
			md-input-container
				label Username
				md-input(v-model="username")
			md-input-container
				label Password
				md-input(v-model="password", type="password")

		md-card-actions
			md-button(type="submit") Log in

</template>

<script>
import $http from "../http";

export default {
	name: 'login-form',
	methods: {
		getToken: async function(e) {
			let data = {
				user: this.username,
				pass: this.password
			};

			let payload = null;

			try {
				payload = await $http.post('/token', data);
			}
			catch (e) {
				payload = null;
				// the request failed, do nothing for now :P
			}

			if (payload == null)
				return;

			sessionStorage.setItem("token", payload.data.token);
			this.$emit("loggedIn")
		}
	},
	data () {
		return {
			username: null,
			password: null
		}
	}
}
</script>

<style lang="sass">

.login-card
	width: 25em

</style>

