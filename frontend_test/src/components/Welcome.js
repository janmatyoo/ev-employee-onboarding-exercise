import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, nickname} = this.props
        // const {state1, state2} = this.state
        return <h1>Welcome {name} a.k.a {nickname}</h1>
    }
}

 export default Welcome