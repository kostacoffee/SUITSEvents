<template lang="pug">
md-card
	md-card-header
		h1.md-title Report
		h2.md-subheading {{event.title}} - {{event.time}}
	
	md-card-content
		md-list.list
			md-list-item.md-double-line(v-for="a in attendance")
				div.md-list-text-container
					span {{a.member.firstName}} {{a.member.lastName}}
					span(v-if="attended(a.member.id, 'additional')") {{a.data.additional}}
				div
					md-icon(v-if="attended(a.member.id, 'drink')") add_circle_outline
					md-icon(v-if="attended(a.member.id, 'bbq')") check
	
	md-card-actions
		div.summary
			md-icon.people-icon people
			label {{numAttendees}}

		md-button.md-icon-button
			md-icon file_download
	
			
</template>

<script>
import socket from '../socket';

export default {
	name: 'event-report',
	props: ['event', 'members', 'attendance'],
	computed: {
		numAttendees() {
			return Object.keys(this.attendance).length;
		}
	},
	methods: {
		attended(id, field) {
			return this.attendance[id] && this.attendance[id].data[field];
		}
	}
}
</script>

<style lang="sass">

.summary
	margin-right: auto
	margin-left: 8px

.people-icon
	margin-right: 3px

.list
	max-height: 60vh
	overflow: scroll

</style>
