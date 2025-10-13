const http = require('http')
const handleHomeRoute = require('./home')

const server = http.createServer(handleHomeRoute)

const PORT = 3000

server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`);
})