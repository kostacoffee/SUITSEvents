<template lang="pug">
md-dialog(:md-active.sync="shared.dialogs.newEvent")
	md-dialog-title
		h1.md-title Add Event

	form(v-on:submit.prevent="addEvent")
		md-dialog-content
			md-field
				label Event Title
				md-input(v-model="title")

			md-field
				label Additional Info
				md-input(v-model="desc")

			md-datepicker(v-model="time")

		md-dialog-actions
			md-button(type="submit") Add Event
			md-button(v-on:click="shared.dialogs.newEvent = false") Close
</template>

<script>
import $http from '../http';
import state from '../state'

export default {
	name: 'add-event-dialog',
	data () {
		return {
			title: "",
			description: "",
			time: new Date(),
			shared: state
		}
	},
	methods: {
		addEvent: async function () {
			let data = {
				title: this.title,
				desc: this.desc,
				time: this.time
			};

			let resp = await $http.addEvent(data);

			if (resp == null)
				return;
			
			//reset fields
			this.title = "";
			this.desc = "";
			this.time = new Date();

			this.shared.dialogs.newEvent = false;
		}
	}
}

</script>

<style lang="sass">

</style>
