<template lang="pug">
div
	md-whiteframe(md-tag="md-toolbar")
		h1.md-title SUITS Events

	router-view(:socket="socket")
</template>

<script>
import config from '../config';
import io from 'socket.io-client'

export default {
	name: "base",
	data () {
		return {
			socket: null
		}
	},
	mounted: function() {
		let token = sessionStorage.getItem('token');
		this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		this.socket = io(config.apiURL, {
			query: {token: token}
		});
	}
}

</script>
