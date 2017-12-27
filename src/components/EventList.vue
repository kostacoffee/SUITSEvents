<template lang="pug">
div
    md-field.event-search
        label Search
        md-input(v-model="query")
    div.md-layout
        div.md-layout-item(v-for="event in filteredEvents")
            event-card.event(:event="event", @openEvent="openEvent", @deleteEvent="")

    md-dialog-confirm(
        :md-active.sync="shared.dialogs.deleteEvent.open",
        md-title="Are you sure you wish to delete this event?",
        md-content="The event and any attendance related will be removed permanently. You cannot undo this action.",
        md-confirm-text="Delete event",
        md-cancel-text="Get me out of here",
        @md-cancel="shared.dialogs.deleteEvent.open = false"
        @md-confirm="removeEvent"
    )
</template>

<script>
import $http from '../http';
import state from '../state'

export default {
    name: "event-list",
    data() {
        return {
            query: "",
            shared: state
        }
    },
    methods: {
        openEvent (eventId, domEvent) {
            this.$router.push('/event/'+eventId)
        },
        removeEvent () {
            $http.deleteEvent(this.shared.dialogs.deleteEvent.selectedEvent);
            this.shared.dialogs.deleteEvent.open = false;
        }
    },
    components: {
        'event-card': function (resolve) {
            require(['./EventCard.vue'], resolve);
        }
    },
    computed: {
        filteredEvents () {
            let filtered = {};
            let q = this.query.toLowerCase();
            if (q == "")
                return this.shared.events;

            for (let key in this.shared.events) {
                if (this.shared.events[key].title.toLowerCase().includes(q) ||
                this.shared.events[key].desc.toLowerCase().includes(q) ||
                this.shared.events[key].time.toLowerCase().includes(q))
                    filtered[key] = this.shared.events[key]
            }

            return filtered;
        },
    }
}
</script>

<style lang="sass">

.event
    width: 200px
    height: 150px
    margin-top: 15px
    margin-bottom: 15px
    transition: box-shadow 0.25s

.event:hover
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

.event-search
    margin-left: auto
    margin-right: auto
    margin-top: 10px
    margin-bottom: 10px
    width: 50%

</style>

