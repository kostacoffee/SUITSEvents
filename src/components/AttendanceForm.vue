<template lang="pug">
md-card
    form(@submit.prevent="changeAttendance")
        md-card-header
            h1.md-title Attendance
            h2.md-subheading(v-if="shared.selectedMember") {{member.firstName}} {{member.lastName}}
        
        md-card-content(v-if="shared.selectedMember")

                md-checkbox(v-model="attendance.primary") BBQ
                md-checkbox(v-model="attendance.secondary") Drink

                md-field
                    label Additional
                    md-input(v-model="attendance.additional")

        md-card-actions(v-if="shared.selectedMember")
            span(v-if="error") {{error}}
            md-button(v-if="!loading", type="submit") Submit
            md-progress-spinner(v-else, md-mode="indeterminate", :md-diameter="30", :md-stroke="3")
</template>

<script>
import $http from '../http';
import state from '../state'

export default {
    name: 'attendance-form',
    data () {
        return {
            shared: state,
            loading: false,
            error: "",
            attendance: {
                primary: false,
                secondary: false,
                additional: ""
            }
        }
    },
    methods: {
        async changeAttendance() {

            this.loading = true
            let resp = await $http.addAttendance(this.$route.params.id, this.shared.selectedMember, {
                primary: this.attendance.primary,
                secondary: this.attendance.secondary,
                additional: this.attendance.additional
            })
            this.loading = false;

            if (resp != null) {
                state.selectedMember = null;
                this.error = null;
            }
            else
                this.error = "Something went wrong"

        }
    },
    computed: {
        member () {
            return this.shared.members.find(m => m.id == this.shared.selectedMember)
        },
        selectedMember() {
            return this.shared.selectedMember;
        }
    },
    watch: {
        selectedMember(newMember) {
            if (!this.selectedMember)    
                return

            let att = this.shared.attendance.find(a => a.member.id == this.selectedMember && a.event.id == this.$route.params.id);
            if (!att) {
                this.attendance = {
                    primary: false,
                    secondary: false,
                    additional: ""
                }
            }
            else {
                this.attendance = {
                    primary: att.primary,
                    secondary: att.secondary,
                    additional: att.additional
                }
            }

        }
    }
}
</script>

