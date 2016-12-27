<template lang="pug">
md-layout(md-gutter)
	md-layout(md-column)
		event-report(:event="event", :members="members", :attendance="attendance")
	md-layout(md-column)
		event-attendance(:event="event", :members="members", :attendance="attendance")
	md-layout(md-column)
		//add-attendee-form
		div C </template>

<script>
import $http from '../http';
import {socket} from '../socket';

export default {
	name: "event-view",
	data () {
		return {
			event: {},
			members: {},
			attendance: {}
		}
	},
	components: {
		'event-report': function (resolve) {
			require(['../components/EventReport.vue'], resolve);
		},
		'event-attendance': function (resolve) {
			require(['../components/EventAttendance.vue'], resolve);
		}
	},
	mounted: async function () {
		this.members = await $http.getMembers();
		let eventP = $http.getEvent(this.$route.params.id);
		let attP = $http.getEventAttendance(this.$route.params.id, this.members);

		this.event = await eventP;
		this.attendance = await attP;
		socket.on("newMember", this.updateMember);
		socket.on("updateMember", this.updateMember);
		socket.on("newAttendance", this.updateAttendance);
		socket.on("updateAttendance", this.updateAttendance);
		socket.on("deleteAttendance", this.deleteAttendance);
	},
	methods: {
		updateMember(data) {
			this.members[data.id] = data;
			this.attendance[data.id].member = data; // updating the attendance record
		},
		updateAttendance(data) {
			this.attendance[data.memberId] = {
				id: data.id,
				member: this.members[data.memberId],
				data: data.data
			};
		}
	}
}

</script>

<style lang="sass">

</style>
