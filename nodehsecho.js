const http=require('http');//2019mar14thu_th6gm
http.createServer((req,res)=>{let body=[];
  req.on('data',(chunk)=>{body.push(chunk);
  }).on('end',()=>{
    body=Buffer.concat(body).toString();
    res.end('body:'+body);});
}).listen(8080);
console.log('httpSV listening on8080...');
