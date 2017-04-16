const Property                  = use('core/property');
const AowRepository             = require('./repository');


const AowDefinition = {

    name: 'advertisementAttributes',

    repository: AowRepository,

    properties: {
        AdId: Property.id(),
        Attribute: Property.string(),
    },

    factory: {},

    instance: {}
};


module.exports = AowDefinition;