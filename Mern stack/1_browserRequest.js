const express=require('express')

const app=express()

app.use((req,res,next)=>{

    res.setHeader("Access-Control-Allow-Origin",'*')
    res.setHeader("Access-Control-Allow-Methods",'GET')

    next();
})


app.get('/',(req,res)=>{
    res.send('hllo')
})

app.get('/home',(req,res)=>{
    res.json({name:'rox'})
})


app.all('*',(req,res)=>{
    res.status(404).send('Error')
})



app.listen(5000,()=>{
    console.log(`port is listening on port 5000`)
})