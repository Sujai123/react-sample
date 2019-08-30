import React from 'react'

class Time extends React.Component{
    constructor(){
        super()
        this.state={
            time:"",
            name:"user"
        }
    }

    updateTime=()=>{
        this.setState({
            time:new Date().toLocaleTimeString(),
            name:"hello"
        })
    }

    render(){
        setInterval(this.updateTime,1000)
        return(
            <div>
                {this.state.name}
                {this.state.time}
            </div>
        )
    }
}

export default Time