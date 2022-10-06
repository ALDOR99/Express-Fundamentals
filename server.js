const express = require("express");
const { use } = require("express/lib/application");
const {accessControl,defaultmiddleWare} = require("./middleware");

const users = [
    {id:1,name:"alis",place:"osmaniye"},
    {id:2,name:"ugurcan",place:"osmaniye"}
];
const app = express();

const PORT = 5000;

app.use(express.json());

//app.use(accessControl);//Uygulama kapsamı

//Get request
//localhost:5000/users

//----------------------------------------------------------------------------------

// app.get("/users",[accessControl,defaultmiddleWare],(req,res,next)=>{
//     res.json(users);
// });


app.get("/users",(req,res,next)=>{
    res.json({
        success:true,
        data:users
    })
})
//----------------------------------------------------------------------------------

app.get("/products",(req,res,next)=>{
    res.send("Products");
});

//----------------------------------------------------------------------------------

app.post("/users",(req,res,next)=>{
    //console.log(req.body);
    const user = req.body;
    users.push(user);
    res.json({
        success:true,
        data:users 
    });
});

//----------------------------------------------------------------------------------

app.put("/users/:id",(req,res,next)=>{
    const id = parseInt(req.params.id);
    for(let i =0; i<users.length; i++ ){
        if(users[i].id===id){
            users[i]={
                ...users[i],
                ...req.body
            };
        }
    }
    res.json({
        success:true,
        data:users
    }); 
});

//----------------------------------------------------------------------------------

app.delete("/users/:id",(req,res,next)=>{
    const id = parseInt(req.params.id);
    for(let i =0; i<users.length; i++ ){
        if(users[i].id===id){
            users.splice(i,1);
            }
        }
    res.json({
        success:true,
        data:users
    });
});

//----------------------------------------------------------------------------------

app.listen(PORT,()=>{   
    console.log("Server Started PORT : " + PORT);
});      

//----------------------------------------------------------------------------------
