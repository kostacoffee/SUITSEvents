<template lang="pug">
md-card
	form(@submit.prevent="submitForm")
		md-card-header
			h1.md-title New Attendee

		md-card-content
			md-field
				label First Name
				md-input(v-model="firstName", required)

			md-field
				label Last Name
				md-input(v-model="lastName", required)

			md-field
				label Access
				md-input(v-model="access", type="number")

		md-card-actions
			md-button(type="submit") Submit

</template>

<script>
import http from '../http';

export default {
	name: 'new-attendee-form',
	data () {
		return {
			firstName: null,
			lastName: null,
			access: null
		}
	},
	methods: {
		async submitForm() {
			//this.$emit('newAttendee', this.firstName, this.lastName, this.access)
			await http.addUnregMember({
				firstName: this.firstName,
				lastName: this.lastName,
				access: this.access
			});

			this.firstName = null;
			this.lastName = null;
			this.access = null;


		}
	}
}
</script>
