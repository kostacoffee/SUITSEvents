<template lang="pug">
div
	md-input-container.event-search
		label Search
		md-input(v-model="query")
	md-layout(md-gutter)
		md-layout.event-item(v-for="event in filteredEvents")
			event-card.event(:event="event", @openEvent="openEvent", @deleteEvent="")
</template>

<script>
import {socket} from '../socket'
import $http from '../http';

export default {
	name: "event-list",
	data() {
		return {
			events: {},
			query: "",
			eventIdToDelete: {}
		}
	},
	mounted: async function () {
		this.events = await $http.getEventList();
		socket.on("newEvent", this.newEvent);
		socket.on("updateEvent", this.updateEvent);
		socket.on("deleteEvent", this.deleteEvent);
	},
	methods: {
		newEvent (eventData) {
			this.$set(this.events, eventData.id, eventData);
		},
		updateEvent: function(eventData) {
			this.events[eventData.id] = eventData;
		},
		deleteEvent (eventData) {
			this.$delete(this.events, eventData.id);
		},
		openEvent (eventId, domEvent) {
			this.$router.push('/event/'+eventId)
		}
	},
	components: {
		'event-card': function (resolve) {
			require(['./EventCard.vue'], resolve);
		}
	},
	computed: {
		filteredEvents () {
			let filtered = {};
			let q = this.query.toLowerCase();

			for (let key in this.events) {
				if (this.events[key].title.toLowerCase().includes(q) ||
				this.events[key].desc.toLowerCase().includes(q) ||
				this.events[key].time.toLowerCase().includes(q))
					filtered[key] = this.events[key]
			}

			return filtered;
		},
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

.event-search
	margin-left: auto
	margin-right: auto
	margin-top: 10px
	margin-bottom: 10px
	width: 50%

</style>

