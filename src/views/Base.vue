<template lang="pug">
div
	md-whiteframe(md-tag="md-toolbar")
		h1.md-title SUITS Events

	router-view.content
</template>

<script>
import {createSocket} from '../socket';

export default {
	name: "base",
	mounted: function() {
		let token = sessionStorage.getItem('token');
		this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		createSocket(token)
	}

}
</script>

<style lang="sass">

.content
	margin: 30px!important

</style>
