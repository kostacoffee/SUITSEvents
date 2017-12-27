<template lang="pug">
div
	md-toolbar.md-primary
		h3.md-title 
			a.title-link(href="/") SUITS Events

	router-view.content
</template>

<script>
import {createSocket} from '../socket';
import $http from '../http';
import {addAuthHeader} from '../http'
import state from '../state'

export default {
	name: "base",
	data() {
		return {
			shared: state
		}
	},
	mounted: async function() {
		if (this.shared.token) {
			createSocket(this.shared.token);
			addAuthHeader()
			console.log("doing stuff");
			state.events = await $http.getEventList();
			state.members = await $http.getMembers();
			console.log("Finished");
		}

	}

}
</script>

<style lang="sass">

.content
	margin: 30px!important

.title-link
	color: white !important

</style>
