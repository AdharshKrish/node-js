const net = require('net')
const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

const client = net.createConnection({ port:1234,host:'192.168.1.5'}, ()=>{
    // console.log('CLIENT: I connected to the server')
    let jo = {"userId":"17CS102","end":false}
    // let jo = {"userId":"17EC116"}
    let data = JSON.stringify(jo)
    client.write(data)
})

client.on('data', (data)=>{

    console.log(data.toString())
    // rl.question("Enter_ ",(ans)=>{
    //     if(ans=="bye"){
            // rl.close()
    //         client.end()
    //     }
    // })
    // for(let i=0; i<4; i++){
        client.write('{"data":"bujukku['+1+']"}')
        // if(i==3)
            client.end()
    // }
})

client.on('end', ()=>{
    console.log('CLIENT: I disconnected from the server')
})