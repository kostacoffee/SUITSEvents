<template lang="pug">
div#event-menu
	md-button.md-fab.md-accent.new-event-btn.md-raised(v-on:click="shared.dialogs.newEvent = true")
			md-icon add
			md-tooltip(direction="bottom") Add Event
	add-event-dialog(ref="add-event-dialog")
	event-list

</template>

<script>
import state from '../state'
export default {
	name: "event-menu",
	data () {
		return {
			shared: state
		}
	},
	components: {
		'event-list': function(resolve) {
			require(['../components/EventList.vue'], resolve)
		},
		'add-event-dialog': function(resolve) {
			require(['../components/AddEventDialog.vue'], resolve)
		}
	}


}

</script>

<style lang="sass">
.new-event-btn
	position: absolute
	right: 16px
	top: 29px
	z-index: 99

</style>
