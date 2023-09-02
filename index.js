//  	Code and Description
// 1 	1xx: Informational
// It means the request has been received and the process is continuing.

// 2 	2xx: Success
// It means the action was successfully received, understood, and accepted.

// 3 	3xx: Redirection
// It means further action must be taken in order to complete the request.
// 4 	4xx: Client Error
// It means the request contains incorrect syntax or cannot be fulfilled.

// 5 	5xx: Server Error
// It means the server failed to fulfill an apparently valid request.

const http = require('http')
const PORT = 2050
const hostName = 'localhost'
const server = http.createServer((req, res)=> {
    // home page
    // About page
    // Contact page
    // Product page
    // Rest ....
    if(req.url == '/'){
        res.statusCode = 200 /*  status code tell about */
        res.setHeader('Content-Type', 'plain/txt')
        res.end("Welcome to Nodejs sever by Ali Akbar")
    }
    else if(req.url == '/about'){
        res.statusCode = 200 /*  status code tell about */
        res.setHeader('Content-Type', 'plain/txt')
        res.end("About page!")
    }
    else if(req.url == '/contact'){
        res.statusCode = 200 /*  status code tell about */
        res.setHeader('Content-Type', 'plain/txt')
        res.end("Contact page!")
    }
    else if(req.url == '/product'){
        res.statusCode = 200 /*  status code tell about */
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({productName:"product1!"}))
    }
    else{
        res.statusCode = 500 /*  status code tell about */
        res.setHeader('Content-Type', 'plain/txt')
        res.end("ServerError!")
    }
   
})
server.listen(PORT, () =>{
   
    console.log(`This server is running at ${hostName}:${PORT}`);
})