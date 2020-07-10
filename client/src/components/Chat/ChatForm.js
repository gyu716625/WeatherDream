import socketio from 'socket.io-client';
import React, { useState } from "react";
import "./Chat.css";
import { FaUserCircle, FaJsSquare } from "react-icons/fa";
import { GrLocation } from 'react-icons/gr';
import { AiOutlineComment } from 'react-icons/ai';

import { Link } from "react-router-dom";
import cookie from 'react-cookies';

const socket = socketio.connect('http://14.50.138.127:3001/Chat/12');

class ChatForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           name:'dmdk', message:''
            //socket: socketio.connect('http://14.50.138.127:3001'),
        };
        this.handleInputValue = this.handleInputValue.bind(this);
        this.send = this.send.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.messageChanged = this.messageChanged.bind(this);

    
    }
componentDidUpdate(){
    console.log(this.state);
}

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    nameChanged(e){
        this.setState({name:e.target.value})

    }
    messageChanged(e){
        this.setState({message: e.target.value})

    }

    send(){
        console.log('check')
        socket.emit('chat-msg',{
            name: this.state.name,
            message: this.state.message
        })
        this.setState({message:''})
    }

   
    render(){

    return (
        <div>
            <ul id="messages"></ul>
            <form onSubmit={(e) => {
                e.preventDefault();        
                  //console.log('submit');
                  //console.log(this.send);
                  this.send()

              }}>
                <input id="m" type="message" autocomplete="off"  placeholder="Enter message" onChange={this.handleInputValue('message')}/><button type='submit'>Send</button>
            </form>

        </div>
    )
    }
}



export default ChatForm;
