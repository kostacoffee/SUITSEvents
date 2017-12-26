<template lang="pug">
md-card.login-card
	form(v-on:submit.prevent="getToken")
		md-card-header
			div.md-title Log in
	
		md-card-content
			md-field
				label Username
				md-input(v-model="username")
			md-field(v-bind:class=" { 'md-input-invalid': error } ")
				label Password
				md-input(v-model="password", type="password")
				span.md-error {{error}}

		md-card-actions
			md-progress-spinner(md-mode="indeterminate", v-show="loading")
			md-button(v-show="!loading", type="submit", v-bind:disabled="loading") Log In

</template>

<script>
import $http from "../http";
import state from '../state'

export default {
	name: 'login-form',
	methods: {
		getToken: async function(e) {
			let data = {
				user: this.username,
				pass: this.password
			};

			this.loading = true;

			let resp = await $http.auth(data);

			this.loading = false;

			if (resp == null) {
				this.error = "Login failed"
				return; // auth failed
			}
			
			console.log(resp);
			sessionStorage.setItem('token', resp.data.token)
			this.shared.token = resp.data.token;

			this.$emit("loggedIn")
		}
	},
	data () {
		return {
			username: null,
			password: null,
			error: null,
			loading: false,
			shared: state
		}
	}
}
</script>

<style lang="sass">

.login-card
	width: 25em

</style>

