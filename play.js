const connect = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = (data) => { 
    if (data === '\u0003') {
      console.log("Terminating the game...")
      process.exit();
  };
};
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};

setupInput();


console.log("Connecting ...");
connect();
