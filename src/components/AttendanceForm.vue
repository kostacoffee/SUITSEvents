<template lang="pug">
md-card
    form(@submit.prevent="changeAttendance")
        md-card-header
            h1.md-title Attendance
            h2.md-subheading(v-if="shared.selectedMember") 
                span {{member.firstName}} {{member.lastName}}
                p.error(v-show="error") {{error}}
        
        md-card-content(v-if="shared.selectedMember")

                md-checkbox(v-model="attendance.primary") Food
                md-checkbox(v-model="attendance.secondary") Drink

                md-field
                    label Additional
                    md-input(v-model="attendance.additional")

        md-card-actions(v-if="shared.selectedMember")
            md-button(v-bind:disabled="loading", type="submit") Submit
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

            let resp;
            if (!this.attendance.primary && !this.attendance.secondary && !this.attendance.additional) {
                resp = await $http.deleteAttendance(this.$route.params.id, this.shared.selectedMember);
            }
            else {
                resp = await $http.addAttendance(this.$route.params.id, this.shared.selectedMember, {
                    primary: this.attendance.primary,
                    secondary: this.attendance.secondary,
                    additional: this.attendance.additional
                })
            }

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

            // reset data to default before trying to set stuff
            Object.assign(this.$data, this.$options.data())

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

