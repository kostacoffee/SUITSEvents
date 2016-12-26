<template lang="pug">
md-layout(md-gutter)
	md-layout(md-column)
		event-report(:event="event", :members="members", :attendance="attendance")
	md-layout(md-column)
		event-attendance(:event="event", :members="members", :attendance="attendance")
	md-layout(md-column)
		//add-attendee-form
		div C
</template>

<script>
import $http from '../http';
import {socket} from '../socket';

export default {
	name: "event-view",
	data () {
		return {
			event: {},
			members: [],
			attendance: []
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
		let eventP = $http.get("/events/"+this.$route.params.id);
		let memberP = $http.get("/members");
		let attP = $http.get("/events/"+this.$route.params.id+"/attendance");

		this.event = (await eventP).data;
		this.members = (await memberP).data;
		this.attendance = (await attP).data;

		socket.on("newMember", this.addMember);
		socket.on("updateMember", this.updateMember);
	},
	methods: {
		addMember(data) {
			this.members.push(data);
		},
		updateMember(data) {
			for (let i = 0; i < this.members.length; i++) {
				if (this.members[i].id == data.id)
					this.members.splice(i, 1, data);
			}
		}
	}
}

</script>

<style lang="sass">

</style>
