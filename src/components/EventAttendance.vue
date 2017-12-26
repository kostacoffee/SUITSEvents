<template lang="pug">
div
    md-field.search-box
        label Search
        md-input(v-model="search")
    
    md-card
        md-card-content
            md-list.md-double-line
                md-list-item(v-for="mem in filteredMembers", @click="selectMember(mem.id)")
                    div.md-list-item-text
                        span {{mem.firstName}} {{mem.lastName}}

                        span(v-if="mem.access") {{mem.access}}
                            md-icon(v-if="!mem.registered") person_outline
                        span(v-else) NO ACCESS

                    md-icon(v-if="attended(mem.id, 'bbq')") check

</template>

<script>
import state from '../state';
export default {
    name: 'event-attendance',
    data () {
        return {
            search: '',
            shared: state
        }
    },
    methods: {
        attended(id, field) {
            return this.shared.attendance.find(a => a.member == id && a.event == this.$route.params.id)
        },
        selectMember(memberId) {
            state.selectedMember = memberId
        }
    },
    computed: {
         filteredMembers () {
            let query = this.search.toLowerCase();
            let filteredMembers = [];
            for (let id in this.shared.members) {
                let mem = this.shared.members[id];
                if ((mem.firstName && mem.firstName.toLowerCase().includes(query)) ||
                    (mem.lastName && mem.lastName.toLowerCase().includes(query))) {
                    filteredMembers.push(mem);
                }
            }
            filteredMembers = filteredMembers.slice(0,10); // only show first 10 to minimise rendering times
            return filteredMembers;
        },
    }
}
</script>
