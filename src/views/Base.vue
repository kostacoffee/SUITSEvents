<template lang="pug">
div
	md-whiteframe(md-tag="md-toolbar")
		h1.md-title SUITS Events

	router-view.content
</template>

<script>
import {createSocket} from '../socket';
import $http from '../http';

export default {
	name: "base",
	mounted: function() {
		let token = sessionStorage.getItem('token');
		initApp(token)
	}

}
</script>

<style lang="sass">

.content
	margin: 30px!important

</style>
