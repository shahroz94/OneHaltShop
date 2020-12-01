//const express = require('express');
const http = require('http');
const { types } = require('util');

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
     res.write("Hello world");
     res.end();
    console.log("Hello")
}).listen(3000);
