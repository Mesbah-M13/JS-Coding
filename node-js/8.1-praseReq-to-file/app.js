const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method /*req.headers*/);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Learning NODE JS </title></head>");
    res.write("<body><h1>Enter Details</h1>");

    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>'
    );
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      // using for loop/ easy way
      /*
      const bodyObj = {};
      for (const [key, val] of params.entries()) {
        bodyObj[key] = val;
      }
*/
      // better way
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObj));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><body>Learning NODE JS </body></head>");
    res.write("<body><h1>Hello Bangladesh </h1></body>");
    res.write("</html>");
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
