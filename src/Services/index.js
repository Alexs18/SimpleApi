const bcrypt = require('bcrypt');

async function passwordRandom() {
    try {
        let Abecedary = "1a2b3c4d5e6d7f8g9h10i*j-k_l@m+n/o(pqrst¡uvwx.yz";
        let password = '';
        let lengthAbecedary = Abecedary.length;

        for (let index = 0; index <10; index++) {
            password+= Abecedary.charAt(Math.floor(Math.random()*lengthAbecedary));    
        }
        let Password = await bcrypt.hash(password, 10);
        return Password;   

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    passwordRandom:passwordRandom
}