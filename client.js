
const net = require("net");

const connect = function() {

  const conn = net.createConnection({
    port: 50541,
    host: "165.227.47.243"
  });

  conn.on("connect", () => {
    console.log("Successfully slithered into the game...");
  });

  conn.write("Name: ", () => {
    console.log("Mum");
  });
  
  conn.on("data", () => {
  console.log("you ded cuz you idled");
  });

  conn.setEncoding("utf8");

  return conn;
};


module.exports = connect;