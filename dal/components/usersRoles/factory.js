const Property                  = use('core/property');
const AdsRepository             = require('./repository');


const AdsDefinition = {

    name: 'usersRoles',

    repository: AdsRepository,

    properties: {
        userId: Property.id(),
        roleId: Property.id()
    },

    factory: {},

    instance: {}
};


module.exports = AdsDefinition;