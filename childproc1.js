const {spawn}=require('child_process');
const ls=spawn('ls',['.']);
ls.stdout.on('data',(d)=>{console.log(`stdout:${d}`);});
ls.stderr.on('data',(d)=>{console.log(`stderr:${d}`);});
ls.on('close',   (code)=>{console.log(`childprocess exited w/code${code}`);});
