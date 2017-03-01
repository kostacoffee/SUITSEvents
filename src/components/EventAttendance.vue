<template lang="pug">
div
	md-input-container.search-box
		label Search
		md-input(v-model="search")
	
	md-card
		md-card-content
			md-list
				md-list-item.md-double-line(v-for="mem in filteredMembers", @click.native="$emit('changedMember', mem.id)")
					div.md-list-text-container
						span {{mem.firstName}} {{mem.lastName}}

						span(v-if="mem.access != ''") {{mem.access}}
							md-icon(v-if="!mem.registered") person_outline
						span(v-else) NO ACCESS

					md-icon(v-if="attended(mem.id, 'bbq')") check

</template>

<script>
import {socket} from '../socket';

export default {
	name: 'event-attendance',
	props: ['event', 'members', 'attendance'],
	data () {
		return {
			search: ''
		}
	},
	methods: {
		attended(id, field) {
			return this.attendance[id] && this.attendance[id].data[field];
		}
	},
	computed: {
		 filteredMembers () {
			let query = this.search.toLowerCase();
			let filteredMembers = [];
			for (let id in this.members) {
				let mem = this.members[id];
				if ((mem.firstName && mem.firstName.toLowerCase().includes(query)) ||
					(mem.lastName && mem.lastName.toLowerCase().includes(query))) {
					filteredMembers.push(mem);
				}
			}
			filteredMembers = filteredMembers.slice(0,10); // only show first 10 to minimise rendering times
			return filteredMembers;
		}
	}
}
</script>
