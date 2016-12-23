<template lang="pug">
md-card.event
	md-card-header(@click="viewEvent")
		h1.md-title {{event.title}}

	md-card-content
		h2.md-subheading {{event.desc}}
		label {{event.time}}

</template>

<script>
export default {
	name: 'event-card',
	props: ['event'],
	methods: {
		viewEvent() {
			this.$router.push('/event/' + this.event.id);
		}
	}
}

</script>

<style lang="sass">

.event:hover
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

.event
	transition: box-shadow 0.25s
	overflow: hidden

</style>
