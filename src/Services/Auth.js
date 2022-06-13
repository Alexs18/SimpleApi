let JWT = require('jsonwebtoken');

async function AuthToken(Data){

    let token = await JWT.sign(Data, "1234", {expiresIn:"1d"})
    return token
}

module.exports = AuthToken;