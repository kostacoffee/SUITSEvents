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
	
		md-input-container
			label Access
			md-input(v-model="accessPrice", type="number")

		md-input-container
			label Non-Access
			md-input(v-model="nonAccessPrice", type="number")

		md-input-container
			label Drink
			md-input(v-model="drinkPrice", type="number")

	md-card-actions
		div.summary
			md-icon.people-icon people
			label {{numAttendees}}

		div.summary
			md-icon.people-icon attach_money
			label {{profit}}

		md-button.md-icon-button
			md-icon file_download


</template>

<script>
import socket from '../socket';

export default {
	name: 'event-report',
	props: ['event', 'members', 'attendance'],
	data () {
		return {
			accessPrice: 2,
			nonAccessPrice: 7,
			drinkPrice: 1
		}
	},
	computed: {
		numAttendees() {
			return Object.keys(this.attendance).length;
		},
		profit() {
			let profit = 0;
			for (let id in this.attendance) {
				let isAccess = this.members[id].access != null;

				if (this.attendance[id].data['bbq']) 
					profit += (isAccess) ? this.accessPrice : this.nonAccessPrice;
				
				if (this.attendance[id].data['drink'])
					profit += this.drinkPrice;

			}
			return profit;
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
