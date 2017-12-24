<template lang="pug">
md-card.login-card
	form(v-on:submit.prevent="getToken")
		md-card-header
			div.md-title Log in
	
		md-card-content
			md-input-container
				label Username
				md-input(v-model="username")
			md-input-container(v-bind:class=" { 'md-input-invalid': error } ")
				label Password
				md-input(v-model="password", type="password")
				span.md-error {{error}}

		md-card-actions
			md-button(type="submit", v-bind:disabled="loading")
				md-spinner(md-indeterminate, v-if="loading")
				span(v-else) Log in

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

			this.loading = true;

			let resp = await $http.auth(data);

			this.loading = false;

			if (resp == null) {
				this.error = "Login failed"
				return; // auth failed
			}


			console.log(resp)
			this.$emit("loggedIn")
		}
	},
	data () {
		return {
			username: null,
			password: null,
			error: null,
			loading: false
		}
	}
}
</script>

<style lang="sass">

.login-card
	width: 25em

</style>

