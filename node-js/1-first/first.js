const fs = require("fs");

fs.writeFile("output.txt", "Hello Friday ", (err) => {
  if (err) console.log("Error Occured");
  else console.log("File is written successfully");
});
