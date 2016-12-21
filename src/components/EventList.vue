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
		this.events = payload.data;
		this.socket.on("newEvent", this.addEvent);
		this.socket.on("updateEvent", this.updateEvent);
		this.socket.on("deleteEvent", this.deleteEvent);
	},
	methods: {
		addEvent: function(eventData) {
			this.events.push(eventData);
		},
		updateEvent: function(eventData) {
			for (let i = 0; i < this.events.length; i++) {
				if (this.events[i].id == eventData.id)
					this.events.splice(i, 1, eventData); // a[i] = b doesn't update
			}
		},
		deleteEvent: function(eventData) {
			for (let i = 0; i < this.events.length; i++) {
				if (this.events[i].id == eventData.id)
					this.events.splice(i, 1);
			}
		}
	}
}
</script>

<style lang="sass">

</style>

