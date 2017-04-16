const Property                  = use('core/property');
const AdsRepository             = require('./repository');


const AdsDefinition = {

    name: 'pets',

    repository: AdsRepository,

    properties: {
        id: Property.id(),
        name: Property.string(),
        imgLink: Property.string()
    },

    factory: {},

    instance: {}
};


module.exports = AdsDefinition;