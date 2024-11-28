const fs = require("fs");

fs.writeFile("mario.text", "ciao mario", (error) => {
  if (error) {
    console.log(error);
    response.statusCode = 500;
    response.end();
    return;
  }
  console.log("file successfully written");
});
