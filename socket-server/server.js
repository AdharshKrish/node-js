const net = require('net')

const server = net.createServer((socket)=>{
    socket.on('data',(data)=>{
        console.log(data.toString())
    })

    socket.write('SERVER: Hello! This is server speaking.\n');
    socket.end('Server closing connection now.\n')
}).on('error',(err)=>{
    console.error(err);
})

server.listen(1234, ()=>{
    console.log('opened server on', server.address().port)
})