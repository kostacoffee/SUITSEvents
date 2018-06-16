<template lang="pug">
div
    form(@submit.prevent="autoselect")
        md-field.search-box
            label Search
            md-input(v-model="search", autofocus)
    
    md-card
        md-card-content
            md-list.md-double-line
                md-list-item(v-for="mem in filteredMembers", @click="shared.selectedMember = mem.id")
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
        autoselect() {
            if (this.filteredMembers.length == 1) {
                this.shared.selectedMember = this.filteredMembers[0].id;
            }
        },
    },
    computed: {
        filteredMembers() {
            let query = this.search;
            // is the search text numeric?
            if (/^\d+$/.test(query)) {
                // yup. let's check if it's a barcode
                if (/^92(?:00|1[1-3])00\d{7}$/.test(query)) {
                    // ACCESS card/app barcodes
                    query = query.slice(-7);
                } else if (/^09\d{9}\d{2}\d{2}$/.test(query)) {
                    // SID library barcode: 09<SID><YY><CHK>
                    query = query.slice(2, 9+2);
                } else if (query.length > 9) {
                    // probably the start of a barcode, short circuit and wait for the full thing
                    return [];
                }
                query = [query];
            } else {
                query = query.toLowerCase().split(/\s+/g);
            }

            let filteredMembers = [];
            for (let id in this.shared.members) {
                let mem = this.shared.members[id];
                let matches = true;
                for (let word of query) {
                    let wordMatches = false;
                    for (let field of ["firstName", "lastName", "access", "sid"]) {
                        if (mem[field] && String(mem[field]).toLowerCase().includes(word)) {
                            wordMatches = true;
                            break;
                        }
                    }
                    if (!wordMatches) {
                        matches = false;
                        break;
                    }
                }
                if (matches) {
                    filteredMembers.push(mem);
                    // limit number of results to reduce render time
                    if (filteredMembers.length == 10) {
                        break;
                    }
                }
            }
            return filteredMembers;
        },
    }
}
</script>
