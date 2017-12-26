<template lang="pug">
md-card.event-card(@click.native="$emit('openEvent', event.id, $event)")
    md-card-header
        h1.md-title {{event.title}}

    md-card-content
        h2.md-subheading {{event.desc}}
        label {{eventDate}}
    
    
    md-button.md-icon-button.delete-button(@click.stop="shared.dialogs.deleteEvent.open = true; shared.dialogs.deleteEvent.selectedEvent = event.id")
        md-icon.md-primary(md-theme="blue") delete

</template>

<script>
import state from '../state'
import $http from '../http'
import moment from 'moment'
export default {
    name: 'event-card',
    props: ['event'],
    data() {
        return {
            shared: state
        }
    },
    methods: {
        async removeEvent() {
            await $http.deleteEvent(event.id)
        }
    },
    computed: {
        eventDate() {
            return moment(this.event.time).format("MMM Do YY")
        }
    }
}

</script>

<style lang="sass">
.delete-button
    position: absolute
    bottom: 0
    right: 0 

</style>
