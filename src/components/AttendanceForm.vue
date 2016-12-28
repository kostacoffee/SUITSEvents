<template lang="pug">
md-card
	form(@submit.prevent="$emit('addAttendance', memAttendance.member.id, memAttendance.data)")
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
	props: ['memAttendance']
}
</script>

