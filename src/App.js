
import React from 'react' ;
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import {useEffect} from "react";
function App() {
  useEffect(()=>{

    var pusher = new Pusher('bed0abcaa40a38eaf559', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) =>{
      alert(JSON.stringify(data));
    });
  },[]);
  return (
<div className="app">
<div className="app__body">
<Sidebar />
<Chat />
</div>
    </div>
  );
}

export default App;
