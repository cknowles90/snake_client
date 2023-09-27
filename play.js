// Pair programmed with: Stephen Fraser - @stephen-fraser - github.com/stephen-fraser

const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");
const conn = connect(); // defined connection function
setupInput(conn);
