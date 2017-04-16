const encrypt                   = require('./encrypt');


function encodePassword(password){
    let passwordSalt = encrypt.generateSalt();
    let passwordHash = encrypt.generateHash(password, passwordSalt);
    return {passwordSalt, passwordHash}

}

module.exports= encodePassword;