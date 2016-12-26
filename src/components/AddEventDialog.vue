<template lang="pug">
md-dialog(ref="add-event-dialog")
	form(v-on:submit.prevent="addEvent")
		md-dialog-title
			h1.md-title Add Event

		md-dialog-content
			md-input-container
				label Event Title
				md-input(v-model="title")

			md-input-container
				label Additional Info
				md-input(v-model="desc")

			md-input-container
				label When is it on?
				md-input(type="datetime", v-model="time")

		md-dialog-actions
			md-button(type="submit") Add Event
			md-button(v-on:click="closeDialog('add-event-dialog')") Close
</template>

<script>
import $http from '../http';

export default {
	name: 'add-event-dialog',
	data () {
		return {
			title: null,
			desc: null,
			time: null
		}
	},
	methods: {
		addEvent: async function () {
			let data = {
				title: this.title,
				desc: this.desc,
				time: this.time
			};

			let resp = null;

			try {
				resp = await $http.post('/events', data);
			}
			catch (e) {
				resp = null;
			}

			if (resp == null)
				return;
			
			//reset fields
			this.title = null;
			this.desc = null;
			this.time = null;

			this.closeDialog('add-event-dialog');
		},

		closeDialog: function (ref) {
			this.$refs[ref].close();
		}
	}
}

</script>

<style lang="sass">

</style>
