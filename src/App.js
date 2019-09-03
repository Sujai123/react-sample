import React from 'react';
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'
import Products from './Products'
import Time from './components/Time'
import Clock from './components/Clock'
import HandlingEvents from './components/HandlingEvents'
import DragnDrop from './components/DragnDrop'
import Form from './components/Form'
import Hooks from './Hooks/Hooks'
import './App.css';
import UseReducerExample from './Hooks/UseReducerExample'
import UseContextExample from './Hooks/useContextExample'
import UseRef from './Hooks/UseRef'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './CallBack/UseCallBack'
import HookTimer from './Hooks/HookTimer'
import CustomHookApp from './CustomHook/CustomHookApp'

import * as Math from './components/Math'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      filterText:'',
      isStock:false
    }
  }

  textBoxHandler=(filterText)=>{
    this.setState({
      filterText:filterText
    })
  }

  StockHandler=(isStock)=>{
    this.setState({
      isStock:isStock
    })
  }

  render(){
    let msg=null
    if(this.state.isStock){
      msg=<div><Hooks /></div>
    }
    return (
      <div style={{'padding':'20px'}}>
        {/* <SearchBar 
        text={this.state.filterText} 
        isStock={this.state.isStock}
        textBoxHandler={this.textBoxHandler}
        StockHandler={this.StockHandler} />
        <ProductTable 
        products={Products}
        text={this.state.filterText} 
        isStock={this.state.isStock} />  */}

        {/* <Time /> */}

         {/* {msg} */}


        {/* <HandlingEvents />
        <DragnDrop /> */}
        {/* <Form /> */}
        
        {/* <Hooks /> */}

        {/* {console.log(Math.sum(100,2),Math.PI)} */}
        {/* <UseReducerExample /> */}
        {/* <UseContextExample /> */}
        {/* <UseRef />
        <UseMemo /> */}
        {/* <UseCallback /> */}
        <HookTimer />
        <CustomHookApp />
      </div>
    );
  }
}

export default App;
