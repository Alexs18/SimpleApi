let JWT = require('jsonwebtoken');

async function AuthToken(req, res, next) {
    
    let {TokenLogin} = req.cookies;
    let decodedToken = JWT.decode(TokenLogin, '12345')
    let decode2 = JWT.verify(TokenLogin, "123464647")
    console.log(decodedToken.Edad, decode2)
    if (!TokenLogin) {
        res.status(401).json({
            message:'you need a token'
        })
    }else{
        next()
    }
     
}

module.exports = AuthToken;