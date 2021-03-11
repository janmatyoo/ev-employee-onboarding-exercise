import React, { Component } from 'react'

class Add extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            id: '',
            firstName: '',
            lastName: ''
        }
    }
    
    handleIdChange = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.id} ${this.state.firstName} ${this.state.lastName}`)
        event.preventDefault()
    }

    render() {
        const {id, firstName, lastName} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Id: </label>
                    <input type='text' value={id} onChange={this.handleIdChange}/>
                </div>
                <div>
                    <label>First Name: </label>
                    <input type='text' value={firstName} onChange={this.handleFirstNameChange}/>
                    </div>
                <div>
                    <label>Last Name: </label>
                    <input type='text' value={lastName} onChange={this.handleLastNameChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Add
