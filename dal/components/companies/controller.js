const Factories                 = use('core/factories');
const AdvertisementFactory      = Factories('companies');


const AdsController = {

    path: AdvertisementFactory.__model__.name,

    permissions: {},

    GET : [
        function () {

            return AdvertisementFactory.find({});
        },

        function (companiesId){
            return AdvertisementFactory.get({id: companiesId});
        }
    ],

    POST: [
        function () {
            return AdvertisementFactory.new(this.request.body)
                .then(ad => ad.save());
        }
    ],

    PUT: [
        function (companiesId) {
            return AdvertisementFactory.get({id: companiesId})
                .then(ad => {
                    ad.populate(this.request.body);
                    return ad;
                })
                .then(ad => ad.save());
        }
    ]
};


module.exports = AdsController;