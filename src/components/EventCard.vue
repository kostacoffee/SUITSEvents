<template lang="pug">
md-card.event-card(@click.native="$emit('openEvent', event.id, $event)")
	md-card-header
		h1.md-title {{event.title}}

	md-card-content
		h2.md-subheading {{event.desc}}
		label {{event.time}}
	
	md-card-actions
		md-button.md-icon-button(@click.stop="$emit('deleteEvent', event.id)")
			md-icon delete


</template>

<script>
export default {
	name: 'event-card',
	props: ['event']
}

</script>

<style lang="sass">

.event-card
	overflow: hidden

</style>
