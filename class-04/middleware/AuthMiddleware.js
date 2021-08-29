var jwt = require('jsonwebtoken');

const verifyToken = async (req,res,next) =>{
    const {token} = req.body
    if (!token) {
        res.status(403).send("token not found")
    }
    var decoded = await jwt.verify(token, process.env.jwtKey);
    if (!decoded) {
        res.status(403).send("token not found")
    }
    req.user = decoded
    next()
}

module.exports = verifyToken