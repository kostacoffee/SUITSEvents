<template lang="pug">
md-layout(md-gutter)
	md-layout.event-item(v-for="event in events")
		event-card.event(:event="event", @click.native="viewEvent(event.id)")
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
		},
		viewEvent (eventId) {
			this.$router.push('/event/' + eventId);
		}
	},
	components: {
		'event-card': function (resolve) {
			require(['./EventCard.vue'], resolve);
		}
	}
}
</script>

<style lang="sass">

.event
	width: 200px
	height: 150px
	margin-top: 15px
	margin-bottom: 15px
	transition: box-shadow 0.25s

.event:hover
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

.event-item
	flex: 0

</style>

