<template lang="pug">
div#event-list
	ul
		li(v-for="event in events") {{event}}
</template>

<script>
export default {
	name: "event-list",
	props: ['socket'],
	data() {
		return {
			events: []
		}
	},
	mounted: async function () {
		let payload = await this.$http.get('/events');
		console.log(this.$http.defaults);
		this.events = payload.data;
		this.socket.on("newEvent", this.addEvent);
	},
	methods: {
		addEvent: function(eventData) {
			this.events.push(eventData);
		}
	}
}
</script>

<style lang="sass">

</style>

