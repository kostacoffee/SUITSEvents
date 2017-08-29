import React from 'react'

export default class Form<Props, State> extends React.Component<Props, State> {
    handleChange(e: React.SyntheticEvent<any>) {
        var change: any = {}
        change[e.currentTarget.name] = e.currentTarget.value
        this.setState(change)
    }
}