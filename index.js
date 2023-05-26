const restapi=require('express');


const data=restapi();

data.listen(8080,()=>{
    console.log('server started');
});
data.get('/',(req,res)=>{
    res.send('this is a get request');
});
data.post('/',(req,res)=>{

    res.sendFile(__dirname+'/topics1.txt');
});
data.put('/',(req,res)=>{
    res.send('this is a put request');
});
data.delete('/',(req,res)=>{
    res.send('this is a delete request');
});




