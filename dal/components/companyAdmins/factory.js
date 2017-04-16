const Property                  = use('core/property');
const AdsRepository             = require('./repository');


const AdsDefinition = {

    name: 'companyAdmins',

    repository: AdsRepository,

    properties: {
        userId: Property.id(),
        companyId: Property.id(),
    },

    factory: {},

    instance: {}
};


module.exports = AdsDefinition;