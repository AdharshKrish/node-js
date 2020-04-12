
//---------------------client----------------------

// creating a custom socket client and connecting it....

var net = require('net');

var client  = new net.Socket();
client.connect({
  port:2222
});
var dport,JSend = {"id":"17CS102","client":["app",null],"data":"connected"};

client.on('connect',function(){
  console.log('Client: connection established with server');

  console.log('---------client details -----------------');
  var address = client.address();
  var port = address.port;
  dport = port;
  var family = address.family;
  var ipaddr = address.address;
  console.log('Client is listening at port' + port);
  console.log('Client ip :' + ipaddr);
  console.log('Client is IP4/IP6 : ' + family);

  JSend.client[1]=port;

  client.write(JSON.stringify(JSend));

});


client.setEncoding('utf8');

client.on('data',function(data){
    if(data=="bye"){
        client.end();
    }
    else{

        const readline = require('readline');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });

          rl.question('', (answer)=>{
            sendData(answer)
          });

          function sendData(answer){
                JSend.data = answer;
                client.write(JSON.stringify(JSend));
                console.log(`Data sent to mcu: ${answer}`);
                if(answer=="bye"){
                    client.end();
                    rl.close();
                }
                else{
                    rl.question('', (answer)=>{
                        sendData(answer)
                    });
                }
          }
        
        
    }
    console.log(data);
});


