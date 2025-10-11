const http = require("http");
const PORT = 4000;
const server = http.createServer((req, res) => {
  console.log(req.method, req.headers);

  const navbar = `
    <nav style="background:#222; padding:10px;">
      <a href="/" style="color:white; margin-right:15px;">Home</a>
      <a href="/men" style="color:white; margin-right:15px;">Men</a>
      <a href="/women" style="color:white;margin-right:15px">Women</a>
      <a href="/kids" style="color:white;margin-right:15px">Kids</a>
      <a href="/cart" style="color:white">Cart</a>
    </nav>
    <hr>
  `;

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    // Navbar HTML (we'll reuse this on every page)
    res.write("<html>");
    res.write("<head><title> NavBar </title></head>");
    res.write("<body>");
    res.write(navbar);
    res.write("<h1> Home Page </h1>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  } else if (req.url === "/men") {
    res.write("<html>");
    res.write("<head><title> Section: Men </title></head>");
    res.write("<body>");
    res.write(navbar);
    res.write("<h1>Men</h1>");
    res.write("<p>We are learning Node.js!</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } 
  else if (req.url === "/women") {
    res.write("<html>");
    res.write("<head><title> Section: Women </title></head>");
    res.write("<body>");
    res.write(navbar);
    res.write("<h1>Women</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } 
  else if (req.url === "/kids") {
    res.write("<html>");
    res.write("<head><title> Section: Kids </title></head>");
    res.write("<body>");
    res.write(navbar);
    res.write("<h1>Kids</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<html>");
    res.write("<head><title> Section: Cart </title></head>");
    res.write("<body>");
    res.write(navbar);
    res.write("<h1>Cart</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server running at http://loaclhost:${PORT}`);
});
