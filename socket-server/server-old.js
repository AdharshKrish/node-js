const net = require('net')

const server = net.createServer((socket)=>{
    socket.on('data',(data)=>{
        let jo = JSON.parse(data)
        if(jo.userId == "17CS102"){
            console.log("welcome Adharsh")
            if(jo.end==true)
                socket.end('Connection terminated by server')
        }
        else if(jo.userId == "17EC116")
            console.log("welcome Himesh")
        else if(jo.data)
            console.log(jo.data)
    })

    socket.write('SERVER: Hello! This is server speaking.\n');
    socket.on('end', ()=>{
        console.log('Client disconnected')
    })
}).on('error',(err)=>{
    console.error(err);
})

server.listen(1234,'192.168.1.5', ()=>{
    console.log('opened server on ', server.address().address+':'+server.address().port)
})
