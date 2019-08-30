import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {date: 5};
    }

    componentDidMount() {
        console.log("componentdidmount",this.timerID)
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUpdate(prevProps, prevstate, snapshot) {
        console.log(prevstate.date)
        if(this.state.date !== prevstate.date){
            console.log('this.componentDidUpdate')
            clearInterval(this.timerID)
            this.setState({})
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        console.log(this.timerID)
        clearInterval(this.timerID)
    }

    tick=()=> {
    let temp = this.state.date
    this.setState({
        date: temp+1
    });
    }

    render() {
    return (
        <div>
        {console.log('render')}
        <h2>It is {this.state.date}.</h2>
        </div>
    );
    }
}

  
  export default Clock