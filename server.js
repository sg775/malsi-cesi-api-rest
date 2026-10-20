const http = require('http');
const app = require('./app.js');

const PORT = 3000;

const server = http.createServer(app);

server.on('listening',()=> {
    console.log("Server started on port " + PORT);
});

// server.on('request', (req,res) => {
//     console.log("New request !");
//     console.log("Method : " + req.method);
//     console.log("Url : " + req.url); 

//     res.writeHead(200, {'Content-Type':'application/json'});
//     res.end('{"status": "ok"}');
// });

server.listen(PORT);