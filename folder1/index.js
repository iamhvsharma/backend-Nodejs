
const http = require("http");

// console.log(http);

// Creating server
const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url === "/about"){
    res.end("<h1>About page</h1>");
    }
    else if(req.url === "/home"){
    res.end("<h1>Home page</h1>");
    }
    else if(req.url === "/contact"){
    res.end("<h1>Contact page</h1>");
    } else{
    res.end("<h1>Page not found</h1>")
    }
});


// Listening server
server.listen(5000, ()=>{
    console.log("Server is working");

});