const bcrypt = require('bcrypt');

async function passwordRandom() {
    try {
        let Abecedary = "1a2b3c4d5e6d7f8g9h10i*j-k_l@m+n/o(pqrst¡uvwx.yz";
        let pwdwithoutencrypt = '';
        let lengthAbecedary = Abecedary.length;

        for (let index = 0; index <10; index++) {
            pwdwithoutencrypt+= Abecedary.charAt(Math.floor(Math.random()*lengthAbecedary));    
        }
        let Pwdencrypt = await bcrypt.hash(pwdwithoutencrypt, 10);

        return {Pwdencrypt, pwdwithoutencrypt};   

    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    passwordRandom:passwordRandom
}