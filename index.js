// 15-05-2026
const  express =   require('express');
const   app =  express();
const  PORT =   3000;

app.get('/',(req,res)=>{
   res.send("hi   I  am  jp , i am    create  simple server   with    the    help  of   express.js ");
});

app.listen(PORT,()=>{
    console.log(`server   running  at : http://localhost:${PORT}`);
});