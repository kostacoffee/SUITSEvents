<template lang="pug">
md-card
	md-card-header
		h1.md-title Report
		h2.md-subheading {{event.title}} - {{eventDate}}
	
	md-card-content
		md-list.list.md-double-line
			md-list-item(v-for="a in eventAttendance", @click="shared.selectedMember = a.member.id")
				div.md-list-item-text
					span {{getAttendee(a.member.id).firstName}} {{getAttendee(a.member.id).lastName}}
					span(v-if="a.additional") {{a.additional}}
				div
					md-icon(v-if="a.secondary") local_drink
					md-icon(v-if="a.primary") local_pizza
	
		md-field
			label Access
			md-input(v-model.number="accessPrice", type="number")

		md-field
			label Non-Access
			md-input(v-model.number="nonAccessPrice", type="number")

		md-field
			label Drink
			md-input(v-model.number="drinkPrice", type="number")

	md-card-actions
		div.summary
			md-icon.people-icon people
			label {{attendees.length}}

		div.summary
			md-icon.people-icon attach_money
			label {{revenue}}

		md-button.md-icon-button(@click.stop="downloadAttendees")
			md-icon file_download


</template>

<script>
import state from '../state'
import moment from 'moment'
export default {
	name: 'event-report',
	data () {
		return {
			accessPrice: 2,
			nonAccessPrice: 6,
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
		revenue() {
			let result = 0;
			for (let m of this.attendees) {
				let isAccess = m.access;
				let att = this.eventAttendance.find(a => a.member.id)

				if (att.primary) 
					result += (isAccess) ? this.accessPrice : this.nonAccessPrice;
				
				if (att.secondary)
					result += this.drinkPrice;

			}
			return result;
		},
        eventDate() {
            return moment(this.event.time).format("MMM Do YY")
        }
	},
	methods: {
		getAttendee(memId) {
			return this.attendees.find(m => m.id == memId)
		},
		downloadAttendees() {
			let output = "firstName,lastName,access,bbq,drink,additional\n";
			for (let i = 0; i < this.eventAttendance.length; i++) {
				let att = this.eventAttendance[i]
				let member = this.attendees.find(m => m.id == att.member.id);
				output += [member.firstName, member.lastName, member.access, att.primary, att.secondary, att.additional].join(',') + '\n';
			}

			output += '\n';
			output += 'Total attendees:,' + this.eventAttendance.length + '\n';
			output += 'Total revenue:,' + this.revenue + '\n';

			output += 'Access attendees:,' + this.attendees.filter(m => m.access).length + '\n';
			output += 'Non-access attendees:,' + this.attendees.filter(m => !m.access).length + '\n';

			output += 'Access foods:,' + this.eventAttendance.filter(a => a.primary && this.attendees.find(m => m.id == a.member.id).access).length + '\n';
			output += 'Non-Access foods:,' + this.eventAttendance.filter(a => a.primary && !this.attendees.find(m => m.id == a.member.id).access).length + '\n';

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

.error
    color: #ff1744!important

</style>
