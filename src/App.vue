<template lang="pug">
div#app
	router-view
</template>

<script>
import 'babel-polyfill';

export default {
	name: 'app',
	data () {
		return {}
	}
}
</script>

<style lang="sass">

#app
	background-color: #f5f5f5
	height: 100%

</style>
