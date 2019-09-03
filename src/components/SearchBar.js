import React,{ Component } from "react";

class SearchBar extends Component{
    SearchHandler=(event)=>{
        this.props.textBoxHandler(event.target.value)
    }

    StockHandler=(event)=>{
        this.props.StockHandler(event.target.checked)
    }

    render(){
        return(
            <div>
                <input 
                type='search' 
                placeholder='Search...'
                value={this.props.text}
                onChange={this.SearchHandler} /><br />
                <input 
                type='checkbox'
                checked={this.props.isStock}
                onChange={this.StockHandler} id='isStock' />
                <label htmlFor='isStock'>Only show products in stock</label>
            </div>
        )
    }
}

export default SearchBar