const http = require('http')

const server = http.createServer((req,res)=> {
  // console.log(req.url, req.method)
  console.log(req.headers);
  process.exit()
})

const PORT = 3000
server.listen(PORT,()=> console.log(`Server started at PORT http://localhost:${PORT} `))