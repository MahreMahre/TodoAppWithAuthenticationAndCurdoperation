
const jwt = require('jsonwebtoken')
const isAuthenticated = async (req,res,next)=>{


    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:'User Not Authenticated'
            });

        }
        const decode =await jwt.verify(token, process.env.jwtsecret);
        if(!decode){
            return res.status(401).json({
                message:"Invalid Token"
            });
        }

        req.id = decode.userId;
        next();
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}


module.exports = {
    isAuthenticated
}