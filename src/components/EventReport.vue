<template lang="pug">
md-card
	md-card-header
		h1.md-title Report
		h2.md-subheading {{event.title}} - {{event.time}}
	
	md-card-content
		md-list.list
			md-list-item(v-for="a in attendance")
				span {{a.member.firstName}} {{a.member.lastName}}
	
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
