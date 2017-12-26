<template lang="pug">
div.md-layout.md-gutter
	event-report.md-layout-item
	event-attendance.md-layout-item
	div.md-layout-item
		attendance-form.att-form
		new-attendee-form.new-att-form
</template>

<script>
import state from '../state'
import $http from '../http';

export default {
	name: "event-view",
	components: {
		'event-report': function (resolve) {
			require(['../components/EventReport.vue'], resolve);
		},
		'event-attendance': function (resolve) {
			require(['../components/EventAttendance.vue'], resolve);
		},
		'attendance-form': function (resolve) {
			require(['../components/AttendanceForm.vue'], resolve);
		},
		'new-attendee-form': function (resolve) {
			require(['../components/NewAttendeeForm.vue'], resolve);
		}
	},
	mounted: async function () {
		let attP = $http.getEventAttendance(this.$route.params.id);

		state.attendance = await attP;
	}
}

</script>

<style lang="sass">

.att-form
	margin-bottom: 10px

.new-att-form
	margin-top: 10px

</style>
