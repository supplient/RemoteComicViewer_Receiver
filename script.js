const socket = new WebSocket("wss://81.70.248.180:17692");
// const socket = new WebSocket("ws://106.39.42.234:16453");

socket.addEventListener("open", function(event) {
    socket.send("Hello Server");
});

socket.addEventListener("message", function(event) {
    console.log("Recv: ", event.data);
});
