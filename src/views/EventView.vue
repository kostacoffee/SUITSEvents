<template lang="pug">
md-layout(md-gutter)
	md-layout(md-column)
		event-report(:event="event", :members="members", :attendance="attendance")
	md-layout(md-column)
		event-attendance(:event="event", :members="members", :attendance="attendance", @changedMember="changeMemAttendance")
	md-layout(md-column)
		attendance-form.att-form(:memAttendance="memAttendance", @addAttendance="addAttendance", @deleteAttendance="deleteAtt")
		new-attendee-form.new-att-form(@newAttendee="newAttendee")
</template>

<script>
import $http from '../http';
import {socket} from '../socket';

export default {
	name: "event-view",
	data () {
		return {
			event: {},
			members: {},
			attendance: {},
			memAttendance: null
		}
	},
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
		this.members = await $http.getMembers();
		let eventP = $http.getEvent(this.$route.params.id);
		let attP = $http.getEventAttendance(this.$route.params.id, this.members);

		this.event = await eventP;
		this.attendance = await attP;
		socket.on("newMember", this.newMember);
		socket.on("updateMember", this.updateMember);
		socket.on("newAttendance", this.newAttendance);
		socket.on("updateAttendance", this.updateAttendance);
		socket.on("deleteAttendance", this.deleteAttendance);
	},
	methods: {
		newMember(data) {
			this.$set(this.members, data.id, data);
			this.members[data.id] = data;
		},
		updateMember(data) {
			this.members[data.id] = data;
			if (this.attendance[data.id])
				this.attendance[data.id].member = data; // updating the attendance record
		},
		newAttendance(data) {
			let attData = {
				id: data.id,
				member: this.members[data.memberId],
				data: data.data
			};
			this.$set(this.attendance, data.memberId, attData);
			this.$forceUpdate();
		},
		updateAttendance(data) {
			this.attendance[data.memberId] = {
				id: data.id,
				member: this.members[data.memberId],
				data: data.data
			};
			console.log(this.attendance)
			console.log(this.attendance[data.memberId]);
		},
		changeMemAttendance(id) {
			let memAtt = this.attendance[id];
			if (memAtt == undefined)
				memAtt = {
					member: this.members[id],
					data: {}
				};
			this.memAttendance = memAtt;
		},
		async addAttendance(memId, data) {
			if (memId == undefined)
				return

			let resp = await $http.addAttendance(this.$route.params.id, memId, data);
			if (resp != null)
				this.memAttendance = null;
		},
		async newAttendee(firstName, lastName, access) {
			let data = {
				firstName,
				lastName,
				access,
				registered: false
			};

			let memberId = await $http.addUnregMember(data);

			if (memberId != null)
				this.changeMemAttendance(memberId);
		},

		async deleteAttendance(data) {
			if (this.$route.params.id != data.eventId)
				return;
			
			this.$delete(this.attendance, data.memberId);
		},

		async deleteAtt(memId) {
			let resp = await $http.deleteAttendance(this.$route.params.id, memId);
		}
	}
}

</script>

<style lang="sass">

.att-form
	margin-bottom: 10px

.new-att-form
	margin-top: 10px

</style>
