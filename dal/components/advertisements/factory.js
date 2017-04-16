const Property                  = use('core/property');
const AdsRepository             = require('./repository');


const AdsDefinition = {

    name: 'advertisements',

    repository: AdsRepository,

    properties: {
        id: Property.id(),
        text: Property.string(),
        imgLink: Property.string()
    },

    factory: {},

    instance: {}
};


module.exports = AdsDefinition;