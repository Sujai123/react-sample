import React from 'react'

class Time extends React.Component{
    constructor(){
        super()
        console.log('constructor')
        this.state={
            time:"",
            name:"user"
        }
    }

    componentDidMount(){
        console.log('didmount')
        setInterval(this.updateTime,1000)
    }

    componentDidUpdate(){
        console.log('didupdate')
    }

    updateTime=()=>{
        this.setState({
            time:new Date().toLocaleTimeString(),
            name:"hello"
        })
    }

    render(){
        console.log('render')
        return(
            <div>
                {this.state.name}
                {/* {this.state.time} */}
            </div>
        )
    }
}

export default Time