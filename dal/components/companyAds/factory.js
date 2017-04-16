const Property                  = use('core/property');
const AdsRepository             = require('./repository');


const AdsDefinition = {

    name: 'companyAds',

    repository: AdsRepository,

    properties: {
        companyId: Property.id(),
        adId: Property.id()
    },

    factory: {},

    instance: {}
};


module.exports = AdsDefinition;