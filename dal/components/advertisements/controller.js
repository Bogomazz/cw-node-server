const Factories                 = use('core/factories');
const AdvertisementFactory      = Factories('advertisements');


const AdsController = {

    path: AdvertisementFactory.__model__.name,

    permissions: {},

    GET : [
        function () {

            return AdvertisementFactory.find({});
        },

        function (advertisementsId){
            return AdvertisementFactory.get({id: advertisementsId});
        }
    ],

    POST: [
        function () {
            return AdvertisementFactory.new(this.request.body)
                .then(ad => ad.save());
        }
    ],

    PUT: [
        function (advertisementsId) {
            return AdvertisementFactory.get({id: advertisementsId})
                .then(ad => {
                    ad.populate(this.request.body);
                    return ad;
                })
                .then(ad => ad.save());
        }
    ]
};


module.exports = AdsController;