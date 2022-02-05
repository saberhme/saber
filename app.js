const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.end('hello this is my home page')
        
    }
    else if(req.url === '/about') {
        res.end('this is about page ')
    }
    else{

    res.end(`
    <h1> Oppps </h1>
    <p> We cant reach the page you're looking for  </p>
    <a href="/">back home </a>
    
    `)
    }
 
})

server.listen(5000)