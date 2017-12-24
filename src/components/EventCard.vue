<template lang="pug">
md-card.event-card(@click.native="$emit('openEvent', event.id, $event)")
	md-card-header
		h1.md-title {{event.title}}

	md-card-content
		h2.md-subheading {{event.desc}}
		label {{event.time}}
	
	
	md-button.md-icon-button.delete-button(@click.stop="$emit('deleteEvent', event.id)")
		md-icon.md-primary(md-theme="blue") delete


</template>

<script>
export default {
	name: 'event-card',
	props: ['event']
}

</script>

<style lang="sass">
.delete-button
	position: absolute
	bottom: 0
	right: 0 

</style>
