import socketio from 'socket.io-client';
import React, { useState } from "react";
import "./Chat.css";
import { FaUserCircle, FaJsSquare } from "react-icons/fa";
import { GrLocation } from 'react-icons/gr';
import { AiOutlineComment } from 'react-icons/ai';
import ChatForm from './ChatForm';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';
import { MdStayPrimaryLandscape } from 'react-icons/md';

const socket = socketio.connect('http://14.50.138.127:3001');

class ChatApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           logs:[]
            //socket: socketio.connect('http://14.50.138.127:3001'),
        };
    }

    componentDidMount(){
        socket.on('chat-msg',(obj)=>{
            const log2 = this.state.logs
            obj.key = 'key_'+(this.state.logs.length + 1)
            console.log(obj)
            log2.unshift(obj)
            this.setState({logs:log2})
        })
    }
   
    render(){
        const messages = this.state.logs.map(e=>(
            <div key ={e.key} >
                <span >{e.name}</span>
                <span >:{e.message}</span>
                <p style = {{clear:'both'}}/>
            </div>
        ))
    return (
        <div>
            <h1 >실시간 채팅</h1>
            <ChatForm />
            <div>{messages}</div>
        </div>
    )
    }
}



export default ChatApp;
