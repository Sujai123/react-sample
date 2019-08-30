import React from 'react'

class HandlingEvents extends React.Component{

    constructor(){
        super()
        this.state={
            isToggleOn:true
        }
    }

    ClickHandler=(e)=>{
        e.preventDefault()
        console.log(e)
    }

    changeToggle=(e)=>{
        console.log(this)
        this.setState((state)=>({
            isToggleOn:!state.isToggleOn
        }))
    }

    render(){
        return(
            <div>
                <a href='www.google.com' onClick={this.ClickHandler} >click me!!!</a>
                <button onClick={(e)=>this.changeToggle(e)}>{this.state.isToggleOn?'ON':'OFF'}</button>
            </div>
        )
    }
}

export default HandlingEvents