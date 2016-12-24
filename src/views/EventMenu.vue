<template lang="pug">
div#event-menu
	md-button.md-fab.md-accent.new-event-btn.md-raised(v-on:click="openDialog('add-event-dialog')")
			md-icon add
			md-tooltip(direction="bottom") Add Event
	add-event-dialog(ref="add-event-dialog")
	event-list.event-list(:socket="socket")

</template>

<script>
export default {
	name: "event-menu",
	props: ['socket'],
	components: {
		'event-list': function(resolve) {
			require(['../components/EventList.vue'], resolve)
		},
		'add-event-dialog': function(resolve) {
			require(['../components/AddEventDialog.vue'], resolve)
		}
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
	top: 29px
	z-index: 99

.event-list
	margin: 30px!important


</style>
