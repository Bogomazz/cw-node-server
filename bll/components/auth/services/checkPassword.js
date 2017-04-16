const encrypt                   = require('./encrypt');

function checkPassword(user, password){
    return user.passwordHash == encrypt.generateHash(password, user.passwordSalt);
}

module.exports = checkPassword;