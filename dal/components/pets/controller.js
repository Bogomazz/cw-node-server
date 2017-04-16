const Factories                 = use('core/factories');
const AdvertisementFactory      = Factories('pets');


const AdsController = {

    path: AdvertisementFactory.__model__.name,

    permissions: {},

    GET : [
        function () {

            return AdvertisementFactory.find({});
        },

        function (petsId){
            return AdvertisementFactory.get({id: petsId});
        }
    ],

    POST: [
        function () {
            return AdvertisementFactory.new(this.request.body)
                .then(ad => ad.save());
        }
    ],

    PUT: [
        function (petsId) {
            return AdvertisementFactory.get({id: petsId})
                .then(ad => {
                    ad.populate(this.request.body);
                    return ad;
                })
                .then(ad => ad.save());
        }
    ]
};


module.exports = AdsController;