import { Member, Event } from 'services/models'

//THIS IS A HACK PLS FIX LATER

export const member: Member = {
    id: 99999,
    firstName: "default",
    lastName: "default",
    gender: "default",
    email: "default",
    joinedOn: new Date(),
    access: 999999, 
    sid: 999999999,
    
    newsletter: false,
    doingIT: false,
    registered: false
}

export const event: Event = {
    id: 99999999,
    title: "default",
    description: "default",
    time: new Date()

}