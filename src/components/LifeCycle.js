import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
                 
        }
    }

    componentDidMount(){
        console.log('didmount')
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycle

