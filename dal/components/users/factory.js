const Property                  = use('core/property');
const UsersRepository           = require('./repository');


const UsersDefinition = {

    name: 'users',

    repository: UsersRepository,

    properties: {
        id: Property.id(),
        passwordSalt: Property.string(),
        passwordHash: Property.string(),
        name: Property.string(),
        phoneNumber: Property.string(),
        email: Property.string()
    },

    factory: {},

    instance: {}
};


module.exports = UsersDefinition;