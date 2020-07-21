import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Enjoyit.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="enjoyupContainer">
      <div className="enjoydownContainer">
        <h1 className="heading"> Enjoy it </h1>
        <div>
          <input placeholder="Your name..." className="enjoyInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room's name..." className="enjoyInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Let's Go</button>
        </Link>
      </div>
    </div>
  );
}