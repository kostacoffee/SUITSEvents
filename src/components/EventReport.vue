<template lang="pug">
md-card
	md-card-header
		h1.md-title Report
		h2.md-subheading(v-if="event") {{event.title}} - {{event.time}}
	
	md-card-content(v-if="event")
		md-list.list
			md-list-item.md-double-line(v-for="a in eventAttendance")
				div.md-list-text-container
					span {{a.member.firstName}} {{a.member.lastName}}
					span(v-if="attended(a.member.id, 'additional')") {{a.data.additional}}
				div
					md-icon(v-if="attended(a.member.id, 'drink')") add_circle_outline
					md-icon(v-if="attended(a.member.id, 'bbq')") check
	
		md-field
			label Access
			md-input(v-model="accessPrice", type="number")

		md-field
			label Non-Access
			md-input(v-model="nonAccessPrice", type="number")

		md-field
			label Drink
			md-input(v-model="drinkPrice", type="number")

	md-card-actions(v-if="event")
		div.summary
			md-icon.people-icon people
			label {{attendees.length}}

		div.summary
			md-icon.people-icon attach_money
			label {{profit}}

		md-button.md-icon-button(@click.stop="downloadAttendees")
			md-icon file_download


</template>

<script>
import state from '../state'
export default {
	name: 'event-report',
	data () {
		return {
			accessPrice: 2,
			nonAccessPrice: 7,
			drinkPrice: 1,
			shared: state
		}
	},
	computed: {
		event () {
			return this.shared.events.find(e => e.id == this.$route.params.id)
		},
		eventAttendance () {
			return this.shared.attendance.filter(a => a.event.id == this.$route.params.id)
		},
		attendees() {
			return this.eventAttendance.map(a => this.shared.members.find(m => m.id == a.member.id)) || []
		},
		profit() {
			let profit = 0;
			for (let m in this.attendees) {
				let isAccess = m.access;
				let att = this.eventAttendance.find(a => a.member.id)

				if (att.primary) 
					profit += (isAccess) ? this.accessPrice : this.nonAccessPrice;
				
				if (att.secondary)
					profit += this.drinkPrice;

			}
			return profit;
		}
	},
	methods: {
		attended(id, field) {
			return this.eventAttendance.find(a => a.id == id && a[field])
		},
		downloadAttendees() {
			let output = "firstName,lastName,access,bbq,drink\n";
			for (let id in this.eventAttendance){
				let member = this.shared.members[id];
				let data = this.eventAttendance.find(a => a.id == member.id);
				output += [member.firstName, member.lastName, member.access, data.primary, data.secondary].join(',') + '\n';
			}

			output += '\n';
			output += 'Total attendees:,' + this.eventAttendance.length + '\n';
			output += 'Total profit:,' + this.profit + '\n';

			output += 'Access attendees:,' + this.attendees.filter(m => m.access).length + '\n';
			output += 'Non-access attendees:,' + this.attendees.filter(m => !m.access).length + '\n';

			output += 'Access BBQs:,' + this.eventAttendance.filter(a => a.primary && this.attendees.find(m => m.id == a.member.id).access).length + '\n';
			output += 'Non-Access BBQs:,' + this.eventAttendance.filter(a => a.primary && !this.attendees.find(m => m.id == a.member.id).access).length + '\n';

			output += 'Drinks:,' + this.eventAttendance.filter(a => a.secondary).length + '\n';
			
			let outputBlob = new Blob([output], {type:'text/csv'});

			let downloadLink = document.createElement('a');
			document.body.appendChild(downloadLink);
			downloadLink.style = 'display: none;';
			let dataUrl = window.URL.createObjectURL(outputBlob);
			downloadLink.href = dataUrl;
			downloadLink.download = this.event.title+'-attendance.csv';
			downloadLink.click();
			downloadLink.remove();

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
