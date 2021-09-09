const express = require("express")
const createError = require("http-errors")

function createApp(database){    
    

    const app = express()
    app.use(express.json());

    app.get("/",(req,res)=>{
        res.send("Hi, this a javacscript application.")
    });
    
    
    app.post("/authenticate",(req,res,next)=>{
        
        username = req.body.username
        password = req.body.password

        user = database.getUser(username,password)
        
        if(user == null){
            return next(createError(404,'User not found'))
        }else{
            return res.json(user)
        }
    })

    return app
}


module.exports = createApp





















