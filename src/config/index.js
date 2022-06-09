require('dotenv').config();

module.exports = {
    user:process.env.user,
    password:process.env.password,
    server:process.env.server,
    database:process.env.database,
    port:1433,
    synchronize:process.env.synchronize,
    trustServerCertificate:process.env.synchronize,
    Encrypt:process.env.synchronize,
    max:process.env.max,
    min:process.env.min,
    trustServerCertificate:process.env.trustServerCertificate,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}