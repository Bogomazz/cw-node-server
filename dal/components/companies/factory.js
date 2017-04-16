const Property                  = use('core/property');
const AdsRepository             = require('./repository');


const AdsDefinition = {

    name: 'companies',

    repository: AdsRepository,

    properties: {
        id: Property.id(),
        name: Property.string(),
        description: Property.string()
    },

    factory: {},

    instance: {}
};


module.exports = AdsDefinition;