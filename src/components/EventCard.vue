<template lang="pug">
md-card.event
	md-card-header
		h1.md-title {{event.title}}

	md-card-content
		h2.md-subheading {{event.desc}}
		label {{event.time}}

</template>

<script>
export default {
	name: 'event-card',
	props: ['event']
}

</script>

<style lang="sass">

.event
	overflow: hidden

</style>
