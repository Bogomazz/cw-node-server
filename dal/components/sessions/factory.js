const Property                  = use('core/property');
const SessionsRepository        = require('./repository');


const SessionsDefinition = {

    name: 'sessions',

    repository: SessionsRepository,

    properties: {
        id: Property.id(),
        userId: Property.id(),
        status: Property.enum("open", "closed")
    },

    factory: {},

    instance: {}
};


module.exports = SessionsDefinition;