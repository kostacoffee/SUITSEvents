<template lang="pug">
div#event-menu
	md-whiteframe(md-tag="md-toolbar")
		h1.md-title SUITS Events
		md-button.md-fab.md-accent.new-event-btn.md-raised(v-on:click="openDialog('add-event-dialog')")
			md-icon add
			md-tooltip(direction="bottom") Add Event
	add-event-dialog(ref="add-event-dialog")
	event-list(:socket="socket")
</template>

<script>
import config from '../config';

export default {
	name: "event-menu",
	data () {
		return {
			socket: null
		}
	},
	components: {
		'event-list': function(resolve) {
			require(['../components/EventList.vue'], resolve)
		},
		'add-event-dialog': function(resolve) {
			require(['../components/AddEventDialog.vue'], resolve)
		}
	},
	mounted: function() {
		let token = sessionStorage.getItem('token');
		this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		this.socket = io(config.apiURL, {
			query: {token: token}
		});
	},
	methods: {
		openDialog: function (ref) {
			this.$refs[ref].$children[0].open() //oh god pls help me
		}
	}
}

</script>

<style lang="sass">

.new-event-btn
	position: absolute
	right: 16px
	top: 30px

</style>
