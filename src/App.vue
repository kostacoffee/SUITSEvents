<template lang="pug">
div#app(v-md-theme="'default'")
	router-view
</template>

<script>
import 'babel-polyfill';

export default {
	name: 'app',
	methods: {
		redirectToMenu: function () {
			this.$router.push("/menu");
		}
	},
	data () {
		return {}
	}
}
</script>

<style lang="sass">

body
	background-color: #f5f5f5

</style>
