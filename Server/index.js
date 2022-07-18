const io = require("socket.io")(8000);
// var app = require("express")();

// var http = require("http").createServer(app);
// var io = require("socket.io")(http);

const users = {};

io.on("connection", (socket) => {
  console.log("connectoion stup");
  socket.on("new-user-joined", (Name) => {
    console.log("New user ", Name);
    users[socket.id] = Name;
    socket.broadcast.emit("user-joined", Name);
  });

  socket.on("send", (message) => {
    socket.broadcast.emit("receive", {
      message: message,
      name: users[(socket, id)],
    });
  });
});

// io.on("connection", function (socket) {
//   console.log("a user has connected");
// });
