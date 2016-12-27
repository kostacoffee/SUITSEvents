<template lang="pug">
md-layout(md-gutter)
	md-layout.event-item(v-for="event in events")
		event-card.event(:event="event", @click.native="$router.push('/event/'+event.id)")
</template>

<script>
import {socket} from '../socket'
import $http from '../http';

export default {
	name: "event-list",
	data() {
		return {
			events: []
		}
	},
	mounted: async function () {
		this.events = await $http.getEventList();
		socket.on("newEvent", this.updateEvent);
		socket.on("updateEvent", this.updateEvent);
		socket.on("deleteEvent", this.deleteEvent);
	},
	methods: {
		updateEvent: function(eventData) {
			this.events[eventData.id] = eventData;
		},
		deleteEvent: function(eventData) {
			delete this.events[eventData.id];
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

