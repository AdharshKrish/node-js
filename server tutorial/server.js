const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function (req, res) {
    // res.write('Hello Node')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function (err,data){
        if(err){
            res.writeHead(404)
            res.write('Error: ' + err.message)
        } else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function (error) {
    if(error){
        console.log('Something went wrong',error)
    } else{
        console.log('Server listening on port ' + port)
    }
})