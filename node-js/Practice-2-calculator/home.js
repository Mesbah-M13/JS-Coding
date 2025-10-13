const handleHomeRoute = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head> <title>Document</title></head>");
    res.write("<body></body>");
    res.write("<h1>Welcome Home</h1>");
    res.write("<a href='calculator'>Visit calculator</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end()
  }
};

module.exports = handleHomeRoute;
