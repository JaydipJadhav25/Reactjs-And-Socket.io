import { io } from "socket.io-client";
import './App.css';
import {  useState } from "react";

let socket ; 
function App() {
  const [message, setMessage] = useState("hiii");
  const [replay, setReplay] = useState([]);
  const[room , setroom] = useState(null);
  const[connection , setconnection] = useState(null);
  // useEffect(() => {
    // Create a socket connection
    function createconnection(){  
         socket = io("http://localhost:3000"); // Change this to your server URL
      console.log("create conn " , socket);
      setconnection("socket connected" , socket.id);
      // Set up event listener for replay
      socket.on("replay", (replay) => {
        // console.log(message);
        setReplay((r) => [...r, replay]);
      });

    }

    // Clean up socket connection on component unmount
    // return () => {
    //   socket.disconnect();
    // };
  // }, []); // Empty dependency array ensures this runs only once

  const sendMessage = () => {
    // const socket = io("http://localhost:3000"); // Ensure the same socket instance is used
    console.log("socket " , socket);
   if(socket.connected){
    // console.log("send message " , {message ,room});
    socket.emit("message", {message ,room});
   }else{
     console.log("socket not connected");
     setconnection("socket not connected");
   }
  };

  const handlesocketdisconnect = () => {
       if(socket){
         socket.disconnect();
         setconnection("socket disconnected");
  }
}

  return (
    <div>
      <h2>Socket.io</h2>
      <h3>{connection}</h3>
      <input
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        value={message}
      />
      <input type="text" placeholder="enter a room id" onChange={(e)=>{
        setroom(e.target.value)
      }}/>
      <button onClick={sendMessage}>Send</button>
      <button
      onClick={createconnection}
      
      >Create Connection</button>
      <button
      onClick={handlesocketdisconnect}
      >Close Connection</button>
    <div>
        <h3>Replays:</h3>
        <ul>
          {replay.map((replay, index) => (
            <li key={index}>{replay}</li> // Display each replay
          ))}
        </ul>
      </div>
    </div>
  );
}


export default App;

