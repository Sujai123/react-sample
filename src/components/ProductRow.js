import React,{ Component } from "react";

class ProductRow extends Component{
    render(){
        let name
        if(!this.props.stocked){
            name = <span style={{'color':'red'}}>{this.props.name}</span>
        }
        else{
            name = this.props.name
        }
        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}

export default ProductRow