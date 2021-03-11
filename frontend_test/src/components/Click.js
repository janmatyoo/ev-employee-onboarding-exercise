import React, { Component } from 'react'

class Click extends Component {

    clickHandler() {
        console.log('Clicked the button')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default Click
