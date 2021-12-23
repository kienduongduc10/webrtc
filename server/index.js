const io = require('socket.io')(443);

io.on('connection', socket => {
    console.log("a user connected");
    console.log(socket.id);
    socket.on('disconnect', () => {console.log('user disconnected');});
});