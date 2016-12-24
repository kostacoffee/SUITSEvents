<template lang="pug">
md-layout(md-gutter)
	md-layout(md-column)
		event-report(:event="event")
	md-layout(md-column)
		//event-attendance
		div B
	md-layout(md-column)
		//add-attendee-form
		div C
</template>

<script>
export default {
	name: "event-view",
	data () {
		return {
			event: {
				title: "Placeholder BBQ",
				desc: "sponsored",
				time: "Week 4"
			}
		}
	},
	components: {
		'event-report': function (resolve) {
			require(['../components/EventReport.vue'], resolve);
		}
	},
}

</script>

<style lang="sass">

</style>
