//2019mar19tue https://tutorialspoint.com/nodejs/nodejs_web_module.htm 
var http=require('http');var url=require('url');//var fs=require('fs');
http.createServer((req,res)=>{var s;  
   var pathname=url.parse(req.url).pathname;//parse req containing filename
   s='req4:'+pathname;console.log(s);           //rd requested file content fromFS
   /*fs.readFile(pathname.substr(1),(err,data)=>{
      if(err){console.log(err);//HTTP Status: 404 : NOT FOUND    //Content Type: text/plain
         res.writeHead(404,{'Content-Type': 'text/html'});
      }else{//HTTP Status: 200 : OK  //Content Type: text/plain
         res.writeHead(200,{'Content-Type': 'text/html'});	
         res.write(data.toString());}//wr filecontent2res.body*/
      res.end(s);});//send res.body   
}).listen(8081);  //console will print the message
console.log('HttpSVrunning at http://127.0.0.1:8081/');
