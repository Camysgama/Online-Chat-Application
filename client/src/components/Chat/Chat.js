  
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://on-line-chat-react.herokuapp.com/';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
    
        socket.emit('enjoy', { name, room }, () => {

        });

        return () => {
          socket.emit('disconnect');

          socket.off();
        }
      }, [ENDPOINT, location.search]);

      useEffect(() => {
        socket.on('message', (message) => {
           setMessages([...messages, message]);
        })
      }, [messages]);

    const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

    console.log(message, messages);

    return (
      <div className="outContainer">
        <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
  
      );
}

export default Chat;