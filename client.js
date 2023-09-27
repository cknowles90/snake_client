
const net = require("net");

const connect = function() {

  const conn = net.createConnection({
    port: 50541,
    host: "165.227.47.243"
  });

  conn.on("connect", () => {
    console.log("Successfully slithered into the game...");
  });
    
    // setInterval(() => {
    //   conn.write("Move: up");
    //   console.log("moving up)");
    // }, 50);

    //   () => {
    //   setTimeout(() => {
    //   }, 50);
    //   console.log("Move up one square (unless facing down");
    // });

  conn.write("Name: ", () => {
    console.log("Mum");
  });
  
  conn.write("Move: down", () => {
    console.log("Move down one square (unless facing up)");
  });

  conn.write("Move: left", () => {
    console.log("Move left one square (unless facing right)");
  });

  conn.write("Move: right", () => {
    console.log("Move right one square (unless facing left)");
  });

  conn.on("data", () => {
  console.log("you ded cuz you idled");
  });


  conn.setEncoding("utf8");

  return conn;
};


module.exports = { connect };