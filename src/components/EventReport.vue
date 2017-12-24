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

		md-button.md-icon-button(@click.stop="downloadAttendees")
			md-icon file_download


</template>

<script>
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
		},
		downloadAttendees() {
			let output = "firstName,lastName,access,bbq,drink\n";
			for (let id in this.attendance){
				let member = this.members[id];
				let data = this.attendance[id].data;
				output += [member.firstName, member.lastName, member.access, data.bbq, data.drink].join(',') + '\n';
			}

			let attendanceIds = Object.keys(this.attendance);
			let accessIds = attendanceIds.filter(key => this.members[key].access);
			let nonaccessIds = attendanceIds.filter(key => !this.members[key].access);
			output += '\n';
			output += 'Total attendees:,' + attendanceIds.length + '\n';
			output += 'Total profit:,' + this.profit + '\n';

			output += 'Access attendees:,' + accessIds.length + '\n';
			output += 'Non-access attendees:,' + nonaccessIds.length + '\n';

			output += 'Access BBQs:,' + accessIds.filter(id => this.attendance[id].data.bbq).length + '\n';
			output += 'Non-Access BBQs:,' + nonaccessIds.filter(id => this.attendance[id].data.bbq).length + '\n';

			output += 'Drinks:,' + attendanceIds.filter(id => this.attendance[id].data.drink).length + '\n';
			
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
