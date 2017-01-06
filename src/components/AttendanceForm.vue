<template lang="pug">
md-card
	form(@submit.prevent="changeAttendance")
		md-card-header
			h1.md-title Attendance
			h2.md-subheading(v-if="memAttendance != null") {{memAttendance.member.firstName}} {{memAttendance.member.lastName}}
		
		md-card-content(v-if="memAttendance != null")
				md-checkbox(v-model="memAttendance.data.bbq") BBQ
				md-checkbox(v-model="memAttendance.data.drink") Drink

				md-input-container
					label Additional
					md-input(v-model="memAttendance.data.additional")

		md-card-actions(v-if="memAttendance != null")
			md-button(type="submit") Submit
</template>

<script>
import $http from '../http';

export default {
	name: 'attendance-form',
	props: ['memAttendance'],
	methods: {
		changeAttendance() {
			let adding = false;

			for (let key in this.memAttendance.data)
				adding = adding || this.memAttendance.data[key];
			
			
			if (adding)
				this.$emit('addAttendance', this.memAttendance.member.id, this.memAttendance.data);
			else
				this.$emit('deleteAttendance', this.memAttendance.member.id);
		}
	}
}
</script>

