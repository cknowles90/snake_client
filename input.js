// Pair programmed with: Stephen Fraser - @stephen-fraser - github.com/stephen-fraser

let connection; 

const handleUserInput = (data) => {     // relocated function to the top, still under the global scope of connection;
  if (data === 'w') {                   // removed the function from nested within setupInput function;
    connection.write("Move: up");       
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if (data === 'd') {
    connection.write("Move: right");
  } else if (data === '\u0003') {
    console.log("Terminating the game...")
    process.exit();
  };
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
  
};

module.exports = setupInput;