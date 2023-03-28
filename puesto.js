const http = require('http');
const fs = require('fs');


const host = 'localhost';
const port = 3000;

http.createServer((reques,Response)=>{

    if(reques.url === '/'){
        Response.write('inicio');
        return Response.end();
    }

    if(request.url === '/home'){
        Response.write(fs.readFileSync('data/hola.html','utf-8'));
        return Response.end();
    }

    // Response.write('gay kevin y andres');
    // Response.end()

    // if(reques.url ==='/'){
    //     Response.write('inicio de proyecto');
    //     return Response.emd
    // }

}).listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}/home`);
})
   

