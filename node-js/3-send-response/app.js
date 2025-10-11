const http = require('http')

const server =  http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><body>Learning NODE JS </body></head>')
  res.write('<body><h1>Hello Bangladesh </h1></body>')
  res.write('</html>')
  res.end()
})

const PORT =3000

server.listen(PORT,()=>{
  console.log(`Server running at PORT ${PORT}`);
})