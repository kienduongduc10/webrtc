const express = require('express');
const http = require('http');
const server = http.createServer();
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(socket.id);
});

server.listen(443, () => {
  console.log('listening on *:443');
});