const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public'); //using path easier to get to route
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io =socketIO(server);                         //http://localhost:3000/socket.io/socket.io.js -> library

app.use(express.static(publicPath));

io.on('connection', (socket) => {                //listens -> when someone connects
  console.log('New user connected');

socket.on('disconnect', () =>{
  console.log('User disconnected');
});
});

server.listen(port, () => {                 //socket.io: instead of app.listen use server.listen
  console.log(`Started on port ${port}`);
});
