const Property                  = use('core/property');
const AdsRepository             = require('./repository');


const AdsDefinition = {

    name: 'userPetRelation',

    repository: AdsRepository,

    properties: {
        userId: Property.id(),
        petId: Property.id(),
        role: Property.string()
    },

    factory: {},

    instance: {}
};


module.exports = AdsDefinition;