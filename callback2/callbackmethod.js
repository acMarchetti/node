const fs = require("fs");

fs.writeFile("mario.txt", "ciao mario", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("file successfully written");
});
