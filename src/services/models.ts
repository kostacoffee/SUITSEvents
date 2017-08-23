export interface Member {
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    joinedOn: Date,
    access: number, sid: number,
    
    newsletter: boolean,
    doingIT: boolean,
    registered: boolean

}

export interface Event {
    id: number
    title: string
    description: string
    time: Date
}