<template lang="pug">
md-card
	form(@submit.prevent="submitForm")
		md-card-header
			h1.md-title New Attendee

		md-card-content
			md-input-container
				label First Name
				md-input(v-model="firstName")

			md-input-container
				label Last Name
				md-input(v-model="lastName")

			md-input-container
				label Access
				md-input(v-model="access")

		md-card-actions
			md-button(type="submit") Submit

</template>

<script>
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
		submitForm() {
			this.$emit('newAttendee', this.firstName, this.lastName, this.access)
			this.firstName = null;
			this.lastName = null;
			this.access = null;
		}
	}
}
</script>
