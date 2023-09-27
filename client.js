// Pair programmed with: Stephen Fraser - @stephen-fraser - github.com/stephen-fraser

const net = require("net");

const connect = function() {

  const conn = net.createConnection({
    port: 50541,
    host: "165.227.47.243"
  });
  
  conn.setEncoding("utf8"); // reordered things to read better and group like-minded code;

  conn.write("Name: MUM"); // removed the callback function;
  
  conn.on("connect", () => {
    console.log("Successfully slithered into the game...");
  });
    
  conn.on("data", (message) => { // changed to calling on the systems 'message' as opposed to overwriting with my own;
  console.log(message);
  });

  return conn;
};


module.exports = connect;