import React, { useState, useEffect, Component } from 'react';
import Strong from '../strong';
import Title from '../title';
import "./contact.css"
import Storage from "../storage"


class constact extends Component {
    state = { 
        name : false ,
        mail : false ,
        message : false ,
        tof : false
     }

    handleChange = e => this.setState({
        [e.target.id] : !e.target.value ? false : e.target.value
    })

    handleChangeMail = e => this.setState({
         mail : e.target.value.match(/\w{2,}@\w+.co[m]{0,1}/gi) ? e.target.value : false
        })

    handleClick =() => {
        const plus = [this.state.name ,this.state.mail, this.state.message];
        if (plus.includes(false)) { 
            this.setState({
                tof : true
            })
        } else {
            Storage.constats.push(
                {
                    name : this.state.name, 
                    mail : this.state.mail,
                    message : this.state.message
                }
            )
            console.log(Storage.constats) 
        }
    }

    componentDidMount () {
        this.state.tof && setTimeout(() => {
            this.setState({
                tof : false
            })
        }, 2000);
    }
    componentDidUpdate (){
        this.state.tof && setTimeout(() => 
            this.setState({
                tof : false
            })
        , 2000);
    }

    render() { 
    const inputs = [
        {element : "input", id : "name" , placeholder : "Name"},
        {element : "input", id : "mail" , placeholder : "Email"},
        {element : "textarea", id : "message" , placeholder : "Message"},
    ]
    const inputRender = inputs.map(item => 
        <item.element
            type="text"
            id={item.id}
            style ={{backgroundColor : !this.state[item.id] && this.state.tof && "red"  }} 
            placeholder={item.placeholder} 
            onChange={ item.id === "mail" ? this.handleChangeMail: this.handleChange}
        />    
    ) ;

        return ( 
            <div className="contact">
                <Title value={"contact"}/> 
                <Strong value={"Get in Touch"}/>
                <div className="map"></div>
                {
                    inputRender
                }
                <button onClick={this.handleClick}>Send</button>
                <button onClick={() => Storage.constats.map(item => item.name === "elham" && console.log(true))}>find</button>
            </div>
         );
    }
}
 
export default constact;