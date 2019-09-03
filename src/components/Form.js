import React from 'react'

class Form extends React.Component{

    constructor(){
        super()
        this.state={
            checkboxes:[
                {
                    name:'french',
                    isChecked:false
                },
                {
                    name:'english',
                    isChecked:false
                },
                {
                    name:'others',
                    isChecked:false
                },
            ],
            selectmultiple:[]
        }
    }

    handleSubmit=(event)=>{
        console.log(this.state)
        event.preventDefault()
    }

    handleMultipleInput=(inputField,isEnable,event,inputState)=>{
        inputField.map((lang,i)=>{
            if(event.target.value === lang.name){
                let temp = inputField
                temp[i][isEnable] = !temp[i][isEnable]
                this.setState({
                    [inputState]:temp
                })
            }
        })
        console.log(this.state.selectmultiple)
    }

    handleChange=(event)=>{
        console.log(event.target.value)
        if(event.target.type === 'checkbox' || event.target.type === 'select-multiple'){
            if(event.target.type === 'checkbox'){
                this.handleMultipleInput(this.state.checkboxes,"isChecked",event,'checkboxes')
            }
            else{
                this.handleMultipleInput(this.state.selectmultiple,"isSelected",event,'selectmultiple')
            }
        }
        else{
            this.setState({
                [event.target.name]:event.target.value
            })
        }
        
    }

    handleSelectChange=(event)=>{
        let options = event.target.options
        let temp = []
        for(let i = 0; i < options.length; i++){
            if(options[i].selected){
                temp.push(options[i].value)
            }
        }
        this.setState({
            selectmultiple:temp
        })

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor='username'>Username : </label>
                    <p><input autoFocus type='text' id='username' name='username' onChange={this.handleChange} /></p>
                    <label htmlFor='password'>Password : </label>
                    <p><input type='password' name='password' id='password' onChange={this.handleChange} /></p>
                    <label htmlFor='explain'>Explain Yourself : </label>
                    <p><textarea id='explain' name='explain' onChange={this.handleChange} ></textarea></p>
                    <p>Gender : </p>
                    <p>
                        <input type='radio' value='male' name='gender' id='male'
                        onChange={this.handleChange}
                        /><label htmlFor='male'>Male</label>
                        <input type='radio' value='female' name='gender' id='female'
                        onChange={this.handleChange}
                        /><label htmlFor='female'>Female</label>
                    </p>
                    <p>Languages Known : </p>
                    <p>
                        <input 
                        type='checkbox'
                        value='french'
                        id='french'
                        name='Language'
                        checked={this.state.checkboxes[0].isChecked}
                        onChange={this.handleChange} />
                        <label htmlFor='french'>French</label>
                        <input 
                        type='checkbox'
                        value='english'
                        id='english'
                        name='Language'
                        checked={this.state.checkboxes[1].isChecked}
                        onChange={this.handleChange} />
                        <label htmlFor='english'>English</label>
                        <input 
                        type='checkbox'
                        value='others'
                        id='others'
                        name='Language'
                        checked={this.state.checkboxes[2].isChecked}
                        onChange={this.handleChange} />
                        <label htmlFor='others'>Others</label>
                    </p>
                    <p>Select Course : </p>
                    <p>
                        <select name='CourseTaken' onChange={this.handleChange}>
                            <option value='CSE'>CSE</option>
                            <option value='ECE'>ECE</option>
                            <option selected value='EEE'>EEE</option>
                            <option value='others'>Others</option>
                        </select>
                    </p>
                    <p>Technical Knowledge : </p>
                    <p>
                        <select name='Technical' onChange={this.handleSelectChange} multiple>
                            <option value='C'>C</option>
                            <option value='C++'>C++</option>
                            <option value='Java'>Java</option>
                            <option value='Others'>Others</option>
                        </select>
                    </p>
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}


export default Form