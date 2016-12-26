<template lang="pug">
div
	md-input-container.search-box
		label Search
		md-input(v-model="search")
	
	md-card
		md-card-content
			md-list
				md-list-item.md-double-line(v-for="mem in filteredMembers", @click.native="$emit('changedMember', mem)")
					div.md-list-text-container
						span {{mem.firstName}} {{mem.lastName}}

						span(v-if="mem.access != ''") {{mem.access}}
							md-icon(v-if="!mem.registered") person_outline
						span(v-else) NO ACCESS

					div
						md-icon(v-if="attended(mem.id, 'additional')") info_outline
						md-icon(v-if="attended(mem.id, 'drink')") add_circle_outline
						md-icon(v-if="attended(mem.id, 'bbq')") check

</template>

<script>
import {socket} from '../socket';

export default {
	name: 'event-attendance',
	props: ['event', 'members', 'attendance'],
	data () {
		return {
			search: '',
			filteredMembers: []
		}
	},
	methods: {
		attended (id) {
			for (let i = 0; i < this.attendance.length; i++) {
				if (this.attendance[i].memberId == id && this.attendance[i].data[type])
					return true;
			}
			return false;
		}
	},
	watch: {
		search () {
			let query = this.search.toLowerCase();
			this.filteredMembers = this.members.filter((mem) => {
				return mem.firstName.toLowerCase().includes(query) ||
						mem.lastName.toLowerCase().includes(query);
			});
		}
	},
	mounted () {
		console.log(this.members);
		this.filteredMembers = this.members;
	}
}
</script>
