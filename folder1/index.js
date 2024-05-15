
const http = require("http");

// console.log(http);

// Creating server
const server = http.createServer((req, res)=>{
    // console.log(req.url);

    res.end("<h1>Noicee</h1>");
});


// Listening server
server.listen(5000, ()=>{
    console.log("Server is working");

});