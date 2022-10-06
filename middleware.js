//--------------------------------------------------------------------

const accessControl = (req,res,next)=>{
    const access = true;
    //console.log("Middleware : Access Control");
    if(!access){
        res.status(401).json({
            success:false,
            message:"You are not authorized"
        });
    }
    next();
};

//--------------------------------------------------------------------

const defaultmiddleWare = (req,res,next) =>{
    console.log("Default Middleware");
    next();
}

//--------------------------------------------------------------------

module.exports = {
    accessControl,
    defaultmiddleWare
};
