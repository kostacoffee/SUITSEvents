<template lang="pug">
div
	md-input-container
		label Search
		md-input(v-model="search")
	
	md-card
		md-card-content
			md-list
				md-list-item.md-double-line(v-for="mem in members", @click="attend(mem)")
					span {{mem.firstName}} {{mem.lastName}}
					span {{mem.access}}

</template>

<script>
import {socket} from '../socket';

export default {
	name: 'event-attendance',
	props: ['event', 'members', 'attendance'],
}
</script>
