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
export default {
	name: 'login-form',
	methods: {
		getToken: async function(e) {
			let data = {
				user: this.username,
				pass: this.password
			};

			let response = null;

			try {
				response = await fetch("https://api.suits.org.au/token", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						'content-type': 'application/json'
					},
					mode: 'cors'
				});
			}
			catch (e) {
				console.log(e);
			}
			
			if (!response.ok)
				return;

			let payload = await response.json();
			sessionStorage.setItem("token", payload.token);
			$emit("loggedIn")
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

