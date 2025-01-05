import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";
import cors from 'cors';


const app = express();
const port=3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const server = createServer(app);

// const io = new Server(server , {
//     orgins: ['http://localhost:3000'],
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//     }
// });


const io = new Server(server, {
    
    cors: {
        origin: "http://localhost:5173", // Vite's default dev server URL
        methods: ["GET", "POST"],
    }
});


io.on('connection', (socket)=>{ 
    console.log('user connected' , socket.id);

    //event listener for message
    socket.on('message', ({message , room})=>{
        socket.join(room);//join room
        console.log("client message: ", message);
        //message bordcast
        // socket.broadcast.emit('replay', message);

        //message to room
        socket.to(room).emit('replay', message);
    })

    socket.on('disconnect', ()=>{
        console.log('user disconnected',socket.id);
    })
});



app.get('/', (req, res)=>{
    res.send('Server is running');
})
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});