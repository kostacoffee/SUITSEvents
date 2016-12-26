<template lang="pug">
md-card
	md-card-header
		h1.md-title Report
		h2.md-subheading {{event.title}} - {{event.time}}
	
	md-card-content
		md-list
			md-list-item(v-for="person in attendees")
				span {{person.firstName}} {{person.lastName}}
	
	md-card-actions
		div.summary
			md-icon.people-icon people
			label {{attendance.length}}

		md-button.md-icon-button
			md-icon file_download
	
			
</template>

<script>
import socket from '../socket';

export default {
	name: 'event-report',
	props: ['event', 'members', 'attendance'],
}
</script>

<style lang="sass">

.summary
	margin-right: auto
	margin-left: 8px

.people-icon
	margin-right: 3px

</style>
