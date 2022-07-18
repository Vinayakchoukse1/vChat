const socket = io("http://localhost:5500");
// const socket = io();

const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");

const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
};

// console.log("promted");
const Name = prompt("Enter your name to join ");
// console.log("promted");
socket.emit("new-user-joined", Name);
// console.log("new user created");

socket.on("user-joined", (Name) => {
  append(`${Name} joined the chat`, "right");
});
