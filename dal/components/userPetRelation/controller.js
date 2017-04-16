const Factories                 = use('core/factories');
const AdvertisementFactory      = Factories('userPetRelation');


const AdsController = {

    path: AdvertisementFactory.__model__.name,

    permissions: {},

    GET : [
        function () {

            return AdvertisementFactory.find({});
        }
    ],

    POST: [
        function () {
            return AdvertisementFactory.new(this.request.body)
                .then(ad => ad.save());
        }
    ],

    PUT: [
        function (userId, petId) {
            return AdvertisementFactory.get({userId, petId})
                .then(ad => {
                    ad.populate(this.request.body);
                    return ad;
                })
                .then(ad => ad.save());
        }
    ]
};


module.exports = AdsController;