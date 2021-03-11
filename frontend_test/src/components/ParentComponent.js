import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(child, pet) {
        alert(`Hello ${this.state.parentName} from ${child} with pet ${pet}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greethandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
