import React from 'react'

class DragnDrop extends React.Component{

    constructor(){
        super()
        this.state = {
            source:'hello',
            target:""
        }
    }

    drop1=(e)=>{
        // e.preventDefault()
        console.log('drop')
        this.setState(state=>({
            target:state.source,
            source:''
        }))
    }

    drop2=(e)=>{
        // e.preventDefault()
        console.log('drop')
        this.setState(state=>({
            target:'',
            source:state.target
        }))
    }

    allowDrop=(e)=>{
        e.preventDefault();
    }

    

    render(){
        return(
            <div>
                <div
                style={{'border':'2px solid black','height':'100px','width':'100px'}}
                onDrop={this.drop2}
                onDragOver={this.allowDrop}
                >
                    <p draggable='true' >{this.state.source}</p>
                </div>
                <div 
                style={{'border':'2px solid black','height':'100px','width':'100px'}}
                onDrop={this.drop1}
                onDragOver={this.allowDrop}
                >
                    <p  draggable='true' >{this.state.target}</p>
                </div>
            </div>
        )
    }
}


export default DragnDrop