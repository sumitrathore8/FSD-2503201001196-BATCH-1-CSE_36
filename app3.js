const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const event = new MyEmitter();

event.on("great", (name) => {
    console.log(`Hello ${name}`);
});

event.on("exit", () => {
    console.log("It's a custom event emitter");
});

event.emit("great", "CSE36");
event.emit("exit");