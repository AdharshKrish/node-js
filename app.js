//global object
console.log(__dirname);
console.log(__filename);


setTimeout(()=>{
    console.log("Hello world");
},1500);


//returns time;
// setInterval(()=>{
    // console.log("oii");
    //clearInterval(time);
// },1000);


//sync
function sync(fun){
    console.log("hi");
    fun();
}
let funEx = ()=>{
    console.log("bye");
}
sync(funEx);

//require a module - 3 ways
var stuff = require("./module.js");
stuff.publicFun("module working");
console.log(stuff.add(1,2));
// console.log(stuff.pi);

//events module - sync applicable
var evt = require("events");

var myEmitter = new evt.EventEmitter();
myEmitter.on('someEvent', (msg)=>{
    console.log(msg);
});

myEmitter.emit('someEvent', 'the event was emmited');

/*
Module	Description
assert	Provides a set of assertion tests
buffer	To handle binary data
child_process	To run a child process
cluster	To split a single Node process into multiple processes
crypto	To handle OpenSSL cryptographic functions
dgram	Provides implementation of UDP datagram sockets
dns	To do DNS lookups and name resolution functions
domain	Deprecated. To handle unhandled errors
events	To handle events
fs	To handle the file system
http	To make Node.js act as an HTTP server
https	To make Node.js act as an HTTPS server.
net	To create servers and clients
os	Provides information about the operation system
path	To handle file paths
punycode	Deprecated. A character encoding scheme
querystring	To handle URL query strings
readline	To handle readable streams one line at the time
stream	To handle streaming data
string_decoder	To decode buffer objects into strings
timers	To execute a function after a given number of milliseconds
tls	To implement TLS and SSL protocols
tty	Provides classes used by a text terminal
url	To parse URL strings
util	To access utility functions
v8	To access information about V8 (the JavaScript engine)
vm	To compile JavaScript code in a virtual machine
zlib	To compress or decompress files
*/

//inherit events to person class using util module
var evt = require('events');
var util = require('util');

// var Person = (name)=>{
//     this.name = name;
// };

var Person = function(name){
    this.name = name;
};

util.inherits(Person, evt.EventEmitter);

var adh = new Person('Adharsh');
var kad = new Person('Kadhir');
var roo = new Person('Roopan');

var people = [adh, kad, roo];

people.forEach((person)=>{
    person.on('speak', (msg)=>{
        console.log(person.name + ' said: ' + msg);
    });
});
adh.emit('speak','hey dudes');


//read write files
var fs = require('fs');

var content = fs.readFileSync('./read.txt','utf8');   //sync file read
console.log(content);
fs.writeFileSync('./write.txt', content+'written by me');  //sync file write

fs.readFile('read.txt','utf8',(err,data)=>{  //async file read
    console.log(data);
    fs.writeFile('write.txt',data);
});

console.log('async');  //this comes first

