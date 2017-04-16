const Property                  = use('core/property');
const AdsRepository             = require('./repository');


const AdsDefinition = {

    name: 'roles',

    repository: AdsRepository,

    properties: {
        id: Property.id(),
        role: Property.string()
    },

    factory: {},

    instance: {}
};


module.exports = AdsDefinition;